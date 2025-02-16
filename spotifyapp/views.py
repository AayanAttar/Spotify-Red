from django.shortcuts import render ,HttpResponse, redirect
from django.contrib import messages
from django.contrib.auth import authenticate , login , logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from .forms import UserRegisterForm
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from spotipy.exceptions import SpotifyException
import requests
from django.conf import settings
import time
import random
# Create your views here.






# functions for webapi 

# function for login
def spotify_login(request):
    # Forcefully log out the user
    request.session.clear()  # This will remove all session data
    
    sp_oauth = SpotifyOAuth(
        client_id=settings.SPOTIFY_CLIENT_ID,
        client_secret=settings.SPOTIFY_CLIENT_SECRET,
        redirect_uri=settings.SPOTIFY_REDIRECT_URI,
        scope = "user-library-read user-top-read user-read-recently-played playlist-read-private streaming user-read-email app-remote-control playlist-read-collaborative user-read-private playlist-modify-public playlist-modify-private user-follow-read user-follow-modify user-read-playback-state user-modify-playback-state"
    )
    
    # Generate the authorization URL
    auth_url = sp_oauth.get_authorize_url()
    
    # Redirect to Spotify login
    return redirect(auth_url)


# function for callback
def spotify_callback(request):
    # Get the authorization code from the URL
    code = request.GET.get('code')
    
    if not code:
        # Handle error if no code is returned
        return redirect('error_page')  # Redirect to an error page if no code is found
    
    sp_oauth = SpotifyOAuth(
        client_id=settings.SPOTIFY_CLIENT_ID,
        client_secret=settings.SPOTIFY_CLIENT_SECRET,
        redirect_uri=settings.SPOTIFY_REDIRECT_URI,
        scope = "user-library-read user-top-read user-read-recently-played playlist-read-private streaming user-read-email app-remote-control playlist-read-collaborative user-read-private playlist-modify-public playlist-modify-private user-follow-read user-follow-modify user-read-playback-state user-modify-playback-state"
        
    )
    
    try:
        # Exchange the authorization code for an access token
        token_info = sp_oauth.get_access_token(code)
    except Exception as e:
        # Log the error and redirect
        print(f"Error exchanging code for token: {e}")
        return redirect('error_page')
    
    if 'access_token' in token_info:
        # Store the new tokens in the session
        request.session['access_token'] = token_info['access_token']
        request.session['refresh_token'] = token_info.get('refresh_token')
        request.session['expires_at'] = token_info['expires_at']
        
        return redirect('/')  # Redirect to the appropriate page
    else:
        return redirect('error_page')

# function for refreshing the token 
def refresh_spotify_token(request):
    """
    Refresh the Spotify access token if expired.
    """
    refresh_token = request.session.get('refresh_token')
    if not refresh_token:
        return None

    sp_oauth = SpotifyOAuth(
        client_id=settings.SPOTIFY_CLIENT_ID,
        client_secret=settings.SPOTIFY_CLIENT_SECRET,
        redirect_uri=settings.SPOTIFY_REDIRECT_URI
    )
    
    # Refresh the token
    token_info = sp_oauth.refresh_access_token(refresh_token)
    request.session['access_token'] = token_info['access_token']
    request.session['expires_at'] = token_info['expires_at']
    return token_info['access_token']


# getting valid and refreshed token
def get_valid_token(request):
    """
    Get a valid Spotify access token, refreshing it if necessary.
    """
    access_token = request.session.get('access_token')
    expires_at = request.session.get('expires_at', 0)

    if not access_token or time.time() < expires_at:
        # Token is expired or missing, refresh it
        access_token = refresh_spotify_token(request)
    # print(f'access_token = {access_token}')
    print('this is the accesss_token',access_token)
    
    # sp = spotipy.Spotify(auth=access_token)

    # try:
    #     user_info = sp.current_user()  # This should return user info if the token is valid
    #     print(f'this is the user info{user_info}')
    # except spotipy.exceptions.SpotifyException as e:
    #     print(f"this is the valid error: {e}")
        
    return access_token


# Create a Spotify client using the access token
# function for fetching top track of user for the display at home
def fetch_top_tracks(access_token):
    sp = spotipy.Spotify(auth=access_token)
    track_info = []

    try:
        top_tracks = sp.current_user_top_tracks(limit=20, time_range= "short_term")
        print("this is raw tracks",top_tracks)
        # if not top_tracks or not top_tracks.get('items'):
        #     return None  # Return None if there are no top tracks
        
        for track in top_tracks.get('items', []):
            album_id = track.get('album', {}).get('id', '')
            album_image = track.get('album', {}).get('images', [{}])[0].get('url', '')
            print("this is album image",album_image)
            # Get the first artist name (if available)
            artists = track.get('artists', [])
            album_artist_name = artists[0]['name'] if artists else ''

            # Track details
            album_track_ext_url = track.get('external_urls', {}).get('spotify', '')  # Fixed key name
            album_track_id = track.get('id', '')  
            album_track_name = track.get('name', '')
            album_track_popularity = track.get('popularity', '')
            album_track_type = track.get('type', '')

            track_info.append(
                {
                    'album_id': album_id,
                    'album_image': album_image,
                    'album_artist_name': album_artist_name,
                    'album_track_ext_url': album_track_ext_url,
                    'album_track_id': album_track_id,
                    'album_track_name': album_track_name,
                    'album_track_popularity': album_track_popularity,
                    'album_track_type': album_track_type,
                }
            )
        print("this is track info",track_info)
        return track_info  # Return list of tracks if available

    except SpotifyException as e:
        print(f"Spotify API Error, No top tracks: {e}")
        # return None
       
       

# Artists recomendations (recomended the artist)
def RandomArtist(access_token):
    sp = spotipy.Spotify(auth=access_token)
    if not access_token:
        return redirect('spotify_login')
    
    
    random_artists = []  # Initialize an empty list to store random artists
    
    
        
    # Search for artists in the specified market
    results = sp.search(q='artist', type='artist', limit=50)  # You can adjust the limit
    
    # Get the list of artists
    artists = results['artists']['items']
    
    if artists:
        # Select a random artist from the list
        num_random_artists = 10
        selected_artists = random.sample(artists,num_random_artists)
        
        for random_artist in selected_artists:
            Artist = random_artist['type'].capitalize()
            random_artist = random.choice(artists)
            artist_name = random_artist['name']
            artist_id = random_artist['id']
            artist_popularity = random_artist.get('popularity', 'N/A')
            artist_image = random_artist['images'][0]['url'] if random_artist['images'] else None
            
            # Note: Some artists may not have 'artists' key, so handle it safely
            artist_main_artist = random_artist['name']  # For single artist, we just use the 'name'

            # Append the artist details to the list
            random_artists.append({
                'name': artist_name,
                'id': artist_id,
                'popularity': artist_popularity,
                'album': random_artist,
                'main_artist': artist_main_artist,  # Use 'main_artist' instead of 'artists' key
                'image': artist_image,
                'type':Artist,
            })
    else:
        print(f"No artists found in market ")
            
    # username = request.user.username
    return random_artists
                
# fetch current playlist
def fetch_current_playlist(access_token):
    sp = spotipy.Spotify(auth= access_token)
    playlist_info = []
    try:
        
        current_playlist = sp.current_user_playlists(limit = 20)
        for playlist in current_playlist.get('items',[]):
            playlist_id = playlist.get('id','')
            playlist_image = playlist.get('images',[])[0].get('url','no image')
            playlist_name = playlist.get('name','')
            playlist_total_tracks = playlist.get('tracks',{}).get('total','0')
            playlist_uri = playlist.get('uri','')
            playlist_type = playlist.get('type','')
            
            playlist_info.append(
                {
                    'id':playlist_id,
                    'image':playlist_image,
                    'name':playlist_name,
                    'total_tracks':playlist_total_tracks,
                    'uri':playlist_uri,
                    'type':playlist_type,
                }
            )
            
        return playlist_info
    except SpotifyException as e:
        print(f'No current playlist available {e}')
        return None
    
# playlist recommendation functions here
  # getting the artist of recently played
def get_recently_played_artists(access_token):
    sp = spotipy.Spotify(auth=access_token)
    try:
        recently_played = sp.current_user_recently_played(limit=30)
        artist_count = {}
        
        for item in recently_played.get('items',[]):
            track = item.get('track',{})
            for artist in track.get('artists',[]):
                artist_name = artist.get('name','')
                if artist_name:
                    artist_count[artist_name] = artist_count.get(artist_name, 0) + 1
        top_artist = sorted(artist_count , key=artist_count.get , reverse = True)[:5] #taking top 5 unique artists
        # print(top_artist)
        return top_artist
    except SpotifyException as e:
        print(f'recently played artist not fetched {e}')
        return None
                
# getting playlist based on the recently played artists
def get_recommended_playlist(access_token, top_artists):
    sp = spotipy.Spotify(auth=access_token)
    recommended_playlists = []
    seen_playlists = set()  # To track already added playlists and avoid duplicates

    try:
        for artist in top_artists:
            if not artist:  # Skip empty values
                print(f"Skipping empty artist value: {artist}")
                continue

            search_result = sp.search(q=artist, type='playlist',limit = 50)
            # total_playlists = search_result['playlists']['total']
            # print(f"Total playlists for {artist}: {total_playlists}")

            while search_result:  # Keep fetching until no next page
                try:
                    playlists = search_result.get('playlists', {}).get('items', [])
                    if not playlists:
                        print(f"No playlists found for {artist}, skipping...")
                        break

                    for playlist in playlists:
                        playlist_id = playlist.get('id', '')
                        if playlist_id in seen_playlists:  # Avoid duplicates
                            continue
                        seen_playlists.add(playlist_id)

                        playlist_name = playlist.get('name', 'No name available')
                        playlist_image = playlist.get('images', [{}])[0].get('url', 'No image available')
                        playlist_ext_url = playlist.get('external_urls', {}).get('spotify', 'No URL available')

                        recommended_playlists.append({
                            'playlist_name': playlist_name,
                            'playlist_id': playlist_id,
                            'playlist_image': playlist_image,
                            'playlist_ext_url': playlist_ext_url
                        })
                        # print(f"Added: {playlist_name} ({playlist_id})")

                    # Fetch the next page of results
                    if search_result['playlists'].get('next'):
                        search_result = sp.next(search_result['playlists'])
                    else:
                        break  # No more pages, exit loop

                except Exception as e:
                    print(f"Error fetching playlists for {artist}: {e}")
                    break  # Avoid infinite loops if an error occurs

        return recommended_playlists

    except Exception as e:
        print(f"Recommended playlist data not fetched: {e}")
        return None
 
# get audio from scraper spotify     
def get_audio(track_name):
    url = "https://spotify-scraper.p.rapidapi.com/v1/track/download/soundcloud"

    querystring = {"track":track_name,"quality":"sq"}

    headers = {
        "x-rapidapi-key": "796f35808emsh5958f40832bdbd2p12a03djsne95ef5b04892",
        "x-rapidapi-host": "spotify-scraper.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)
    if response.status_code == 200:
        data = response.json()
        
        # fetch the audio url
        audio_url = None
        if "soundcloudTrack" in data:
            soundcloud_Track = data['soundcloudTrack']
            if 'audio' in soundcloud_Track:
                audio_url = soundcloud_Track['audio'][0].get('url',None)
                
        return audio_url
    else:
        print(f'error getting the audio url for {track_name}:{response.status_code}')
        return None



    
# for calculating the durations
class Duration:
    def __init__(self,duration_ms):
        self.total_seconds = duration_ms // 1000
        
    def min_sec(self):
        minutes = self.total_seconds // 60
        seconds = self.total_seconds % 60
        return f'{minutes}min {seconds:02d} sec'
    
    def hour_min(self):
        hour = self.total_seconds // 3600
        minutes = (self.total_seconds % 3600) // 60
        return f'{hour}hour {minutes}min'
    
    
# Function to fetch album and track data
def get_album_data(access_token, album_id):
    sp = spotipy.Spotify(auth=access_token)
    
    try:
        # Fetch album info
        albums = sp.album(album_id)
        
        if not albums:
            print(f"Failed to get album data, received empty response")
            return None
        
        album_id = albums.get('id', '')
        album_image = albums.get('images', [{}])[0].get('url', '')
        album_name = albums.get('name', '')
        album_type = albums.get('album_type', '').capitalize()
        

        artists = []
        for artist in albums.get('artists', []):
            artist_id = artist.get('id', '')
            artist_name = artist.get('name', '')
            artist_type = artist.get('type', '')
            artists.append({
                'id': artist_id,
                'name': artist_name,
                'type': artist_type
            })
        
        album_info = [{
            'name': album_name,
            'type': album_type,
            'image': album_image,
            'artists': artists,
            'id': album_id
        }]
        

        # Fetch track info
        albums_tracks = sp.album_tracks(album_id)
        
        if not albums_tracks:
            print(f"Failed to get tracks data for album {album_id}")
            return None 
        
        track_info = []
        total_seconds = 0

        for track in albums_tracks.get('items', []):
            track_name = track.get('name', '')
            track_image = track.get('album', {}).get('images', [{}])[0].get('url', '')
            track_duration_seconds = track.get('duration_ms', 0) // 1000  # Convert ms to seconds
            total_seconds += track_duration_seconds
            
            minutes = track_duration_seconds // 60
            seconds = track_duration_seconds % 60

            track_duration = f"{minutes}:{seconds:02d}"  # Format as minute:second
            track_number = track.get('track_number', 0)
            track_type = track.get('type', '')
            
            track_artists = []
            for artist in track.get('artists', []):
                artist_id = artist.get('id', '')
                artist_name = artist.get('name', '')
                track_artists.append({
                    'id': artist_id,
                    'name': artist_name
                })

            track_info.append({
                'name': track_name,
                'duration': track_duration,
                'number': track_number,
                'type': track_type,
                'alb_tr_image':track_image,
                'track_artists':track_artists,
            })

        total_minutes = total_seconds // 60
        remaining_seconds = total_seconds % 60
        total_duration = f"{total_minutes} min {remaining_seconds:02d} sec"

        total_songs = len(albums_tracks.get('items', []))

        album_data = {
            'album_info': album_info,
            'track_info': track_info,
            'total_duration': total_duration,
            'total_songs': total_songs,
        }
        print(f'this is total duration of the album{total_duration}')

        
        return album_data

    except Exception as e:
        print(f"Error fetching album data: {e}")
        return None


         
#  function to fetch the artist info
def get_artist_data(access_token, artist_id):
    sp = spotipy.Spotify(auth=access_token)
    artists_info = []
    artists_album_info = []
    artists_top_track = []
    try:
        # getting the artist related info
        artist_info = sp.artist(artist_id)
        if not artist_info:
            print(f"Failed to fetch artist info for ID {artist_id}")
            return None
        
        # Safely access fields in the response using .get() to avoid KeyErrors
        artist_external_url = artist_info.get('external_urls', {}).get('spotify', '')
        artist_followers = artist_info.get('followers', {}).get('total', 0)
        artist_genres = artist_info.get('genres', [])
        artist_id = artist_info.get('id', '')
        artist_image = artist_info.get('images', [{}])[0].get('url', '')
        artist_name = artist_info.get('name', '')
        artist_popularity = artist_info.get('popularity', 0)
        artist_type = artist_info.get('type', '')

        artists_info.append({
            'ext_url': artist_external_url,
            'followers': artist_followers,
            'genres': artist_genres,
            'id': artist_id,
            'image': artist_image,
            'name': artist_name,
            'popularity': artist_popularity,
            'type': artist_type,
        })

        # getting the album info of the artist
        artists_albums = sp.artist_albums(artist_id, limit=20, offset=0)
        if not artists_albums or 'items' not in artists_albums:
            print(f"Failed to fetch albums for artist ID {artist_id}")
            return None
        
        for album in artists_albums['items']:
            albums_type = album.get('type', '')
            albums_tracks = album.get('total_tracks', 0)
            albums_external_url = album.get('external_urls', {}).get('spotify', '')
            albums_id = album.get('id', '')
            albums_image = album.get('images', [{}])[0].get('url', '')
            albums_name = album.get('name', '')
            albums_release_date = album.get('release_date', '')
            albums_group = album.get('album_group', '')

            artists_album_info.append({
                'album_type': albums_type,
                'album_total_tracks': albums_tracks,
                'album_external_url': albums_external_url,
                'album_id': albums_id,
                'album_image': albums_image,
                'album_name': albums_name,
                'album_release_date': albums_release_date,
                'group': albums_group,
            })

        # getting top tracks of artist
        artists_top_tracks = sp.artist_top_tracks(artist_id)
        total_seconds = 0
        if not artists_top_tracks or 'tracks' not in artists_top_tracks:
            print(f"Failed to fetch top tracks for artist ID {artist_id}")
            return None
        
        for track in artists_top_tracks['tracks']:
            track_external_url = track.get('external_urls', {}).get('spotify', '')
            track_id = track.get('id', '')
            track_name = track.get('name', '')
            track_type = track.get('type', '')
            track_uri = track.get('uri', '')
            track_popularity = track.get('popularity', 0)
            track_image = track.get('album', {}).get('images', [{}])[0].get('url', '')
            track_duration_seconds = track['duration_ms'] // 1000  # Convert ms to seconds
            total_seconds += track_duration_seconds
            
            minutes = track_duration_seconds // 60
            seconds = track_duration_seconds % 60

            track_duration = f"{minutes}:{seconds:02d}"

            artists_top_track.append({
                'track_ext_url': track_external_url,
                'track_id': track_id,
                'track_name': track_name,
                'track_type': track_type,
                'track_uri': track_uri,
                'track_popularity': track_popularity,
                'track_duration':track_duration,
                'track_image':track_image,
                
            })
        print(artist_id)

        return {
            'artist_info': artists_info,
            'artist_album_info': artists_album_info,
            'artist_top_track': artists_top_track,
        }

    except Exception as e:
        print(f'Error occurred while fetching artist data: {e}')
        return None     

# function for the playlist
def get_playlist_data(access_token, playlist_id):
    sp = spotipy.Spotify(auth=access_token)

    try:
        playlist_info = []
        offset = 0
        limit = 100  # Spotify's max limit per request

        current_playlist = sp.playlist(playlist_id)
        
        playlist_desc = current_playlist.get('description', '')  
        playlist_name = current_playlist.get('name', '')        
        playlist_image = current_playlist.get('images', [])[0].get('url', '') if current_playlist.get('images') else ''
        playlist_type = current_playlist.get('type','')
        playlist_total_songs = current_playlist.get('tracks', {}).get('total', 0)
        print(f'Total number of songs: {playlist_total_songs}')

        playlist_metadata = {
            'playlist_desc': playlist_desc,
            'playlist_name': playlist_name,
            'playlist_image': playlist_image,
            'playlist_type': playlist_type,
            'playlist_total_songs': playlist_total_songs,
        }

        total_seconds = 0  # To accumulate total duration of all tracks

        while True:
            playlist_data = sp.playlist_items(playlist_id, limit=limit, offset=offset)

            for data in playlist_data.get('items', []):
                track = data.get('track', {})
                album = track.get('album', {})

                album_type = album.get('album_type', '')
                total_tracks = album.get('total_tracks', '')
                album_ext_url = album.get('external_urls', {}).get('spotify', '')
                album_id = album.get('id', '')
                album_image = album.get('images', [])[0].get('url', '') if album.get('images') else ''
                album_name = album.get('name', '')

                artists = track.get('artists', [])
                track_artist_info = []
                for art in artists:
                    track_artist_ext_url = art.get('external_urls', {}).get('spotify', '')
                    track_artist_id = art.get('id', '')
                    track_artist_name = art.get('name', '')
                    track_artist_info.append({
                        'track_artist_ext_url': track_artist_ext_url,
                        'track_artist_id': track_artist_id,
                        'track_artist_name': track_artist_name,
                    })

                # Get track duration in seconds
                track_duration_seconds = track.get('duration_ms', 0) // 1000  
                total_seconds += track_duration_seconds  # Add to the total duration

                # Calculate track duration in minutes and seconds
                minutes = track_duration_seconds // 60
                seconds = track_duration_seconds % 60
                track_duration = f"{minutes}:{seconds:02d}"
                # print(f' {track_duration}')
                
                track_external_url = track.get('external_urls', {}).get('spotify', '')
                track_id = track.get('id', '')
                track_name = track.get('name', '')
                track_popularity = track.get('popularity', '')
                track_type = track.get('type', '')
                track_uri = track.get('uri', '')
                track_image = album_image 
                track_artist = ', '.join([art.get('name', '') for art in artists]) 

                playlist_info.append({
                    'album_type': album_type,
                    'total_tracks': total_tracks,
                    'album_ext_url': album_ext_url,
                    'album_id': album_id,
                    'album_image': album_image,
                    'album_name': album_name,
                    'track_artist_info': track_artist_info,  
                    'track_duration': track_duration,
                    'track_ext_url': track_external_url,
                    'track_id': track_id,
                    'track_name': track_name,
                    'track_popularity': track_popularity,
                    'track_type': track_type,
                    'track_uri': track_uri,
                    'track_image': track_image,
                    'track_artist':track_artist,
                })

            if playlist_data.get('next'):
                offset += limit  
            else:
                break  

        # Now, calculate the final total duration of all tracks
        total_hour = total_seconds // 3600
        remaining_minutes = (total_seconds % 3600) //60
        total_duration = f"{total_hour} hour {remaining_minutes:02d} min"
        # print(f'Total duration of all tracks: {total_duration}')

        # Append total duration to playlist metadata or info as needed
        playlist_metadata['total_duration'] = total_duration

        return {
            'playlist_info': playlist_info,
            'playlist_metadata': playlist_metadata,
        }

    except Exception as e:
        print(f'Error fetching playlist data: {e}')
        return None


# function for the tracks
def get_track_data(access_token, track_id):
    sp = spotipy.Spotify(auth=access_token)
    
    try:
        track_data = sp.track(track_id)  # Fetch track details for a single track

        if not track_data:
            print("No track data found.")
            return None

        track_album = track_data.get('album', {})
        album_id = track_album.get('id', '')
        album_image = track_album.get('images', [{}])[0].get('url', '')  # Safe extraction
        album_name = track_album.get('name', '')
        album_release_date = track_album.get('release_date', '')
        year = album_release_date.split('-')[0]

        # Extract first artist's details
        artists = track_data.get('artists', [])  
        artist_id = artists[0].get('id', '') if artists else ''
        artist_name = artists[0].get('name', '') if artists else ''

        # Extract track details
        duration = track_data.get('duration_ms', 0)
        temp_duration = Duration(duration)
        track_duration = temp_duration.min_sec()
        print(f' this is the track duration with class Duration{track_duration}')
        track_name = track_data.get('name', '')
        track_popularity = track_data.get('popularity', '')
        track_type = track_data.get('type', '')
        track_uri = track_data.get('uri', '')
        
        artist_data = sp.artist(artist_id)
        artist_image = artist_data.get('images',[{}])[0].get('url','')
        
        audio_url = get_audio(track_name)
        print(f'this is the audio url for {track_name}---{audio_url}')

        track_info = {
            'id': album_id,
            'image': album_image,
            'name': album_name,
            'release_date': album_release_date,
            'year':year,
            'art_id': artist_id,
            'art_name': artist_name,
            'art_image':artist_image,
            'tr_duration': track_duration,
            'tr_name': track_name,
            'tr_popularity': track_popularity,
            'tr_type': track_type,
            'tr_uri': track_uri,
            'audio_url':audio_url,
        }

        # print(f'Track data fetched successfully: {track_info}')
        return track_info

    except Exception as e:
        print(f'Track data not fetched: {e}')
        return None


# function for songs data
 # function for album
def album_songs(request, album_id):
    access_token = get_valid_token(request)
    if not access_token:
        return redirect('spotify_login')
    try:
        
    
        album_data = get_album_data(access_token,album_id)
        
        context = {
            'album_info': album_data['album_info'],
            # 'tracks_list': album_data['tracks_list'],
            'track_info': album_data['track_info'],
            'total_duration': album_data['total_duration'],
            'total_songs': album_data['total_songs'],
            # 'artist_tracks': album_data['artist_tracks'],
            
        }
        print(f"Received album_id in album_songs: {album_id}")
        return render(request, 'songs.html', context)
    except SpotifyException as e:
        print(f'No data for album songs {e}')
        return None

# function for artists
def artist_songs(request, artist_id):
    access_token = get_valid_token(request)
    if not access_token:
        return redirect('spotify_login')

    try:
        artist_data = get_artist_data(access_token, artist_id)
        if not artist_data:
            return render(request, 'home.html', {'message': 'Error fetching artist data'})

        context = {
            'artist_info': artist_data['artist_info'],
            'artist_album_info': artist_data['artist_album_info'],  # Fixed
            'artist_top_track': artist_data['artist_top_track'],  # Fixed
        }
        return render(request, 'songs.html', context)
    except SpotifyException as e:
        print(f'No data for artist songs {e}')
        return None

#  func for playlist
def playlist_songs(request, playlist_id):
    access_token = get_valid_token(request)
    if not access_token:
        return redirect ('spotify_login')
    try:
        
        playlist_data = get_playlist_data(access_token, playlist_id)
        if not playlist_data:
            return render (request, 'home.html')

        context = {
            'playlist_metadata': playlist_data['playlist_metadata'],
            'playlist_info':playlist_data ['playlist_info'],
        }
        return render (request, 'songs.html',context)
    except SpotifyException as e:
        print(f'No data for playlsit songs {e}')
        return None

# function for recommended playlists
def recommended_playlist_songs(request , playlist_id):
    access_token = get_valid_token(request)
    if not access_token:
        return redirect('spotify_login')
    
    try:
        
        playlists_data = get_playlist_data(access_token , playlist_id)
        if not playlists_data:
            return render ( request,'home.html')
        print('playlists data not fetched')
        
        top_artists = get_recently_played_artists(access_token)
        
        recommended_playlists = get_recommended_playlist(access_token, top_artists)
        
        context = {
            'playlist_metadata': playlists_data['playlist_metadata'],
            'playlist_info':playlists_data ['playlist_info'],
            'recommended_playlist': recommended_playlists,
        }
        return render (request, 'home.html', context)
    except SpotifyException as e:
        print(f'NO data for  recomm playlsit {e}')
        return None
    
# function for tracks
def track_play(request, track_id):
    access_token = get_valid_token(request)
    if not access_token:
        return redirect('spotify_login')
    
    try:
        
        # Fetch track data
        track_info = get_track_data(access_token, track_id)
        if not track_info:
            return HttpResponse("Track not found", status=404)
    
        context = {
            'track_info': track_info,
            
        }

        return render(request, 'player.html', context)
    except SpotifyException as e:
        print(f'no data for tracks {e}')
        return None

# functions for the spotify red website 
@login_required(login_url="login")
def home(request):
    access_token = get_valid_token(request)
    if not access_token:
        return redirect('spotify_login')
    try:
        
        # playlist_id = request.GET.get('playlist_id', None)

        username = request.user.username
        
        top_tracks = fetch_top_tracks(access_token )
        random_artist = RandomArtist(access_token)
        playlist = fetch_current_playlist(access_token )
        top_artist = get_recently_played_artists(access_token)
        rec_playlists = get_recommended_playlist(access_token, top_artist)
        
        print(top_tracks)
        context = {
            'username': username,
            'page':'home',
            'Random_artists': random_artist,
            'Top_tracks': top_tracks,
            'Playlists':playlist,
            'rec_playlist':rec_playlists,   
        }
        
        return render(request, 'home.html' ,context)
    except SpotifyException as e:
        return render(request, 'home.html')

# login function
def loginUser(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
           
        user = authenticate( username = username , password = password)
        
        if user is not None:
            login(request, user)
            return redirect ('home')
        else:
            messages.info(request, f' account does not exist please signin')
    form = AuthenticationForm()
    return render(request, 'login.html', {'form':form, 'title':'login'})

# signup function 
def signup(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, f"Your account has been created! You can now log in.")
            return redirect('login')
        else:
            messages.error(request, "There were errors with your form.")  # Optional: Add custom messages for debugging
    else:
        form = UserRegisterForm()

    return render(request, 'signup.html', {'form': form, 'title': 'Sign Up'})

# logout function
def logoutUser(request):
    logout(request)
    messages.success(request , f"You are logged out.")
    return redirect (  'login')












