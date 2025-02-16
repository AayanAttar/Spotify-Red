from django.urls import path
from spotifyapp import views


urlpatterns = [
    path('', views.home, name='home'),
    path('album/<str:album_id>/', views.album_songs, name='album_songs'),
    path('artist/<str:artist_id>/', views.artist_songs, name='artist_songs'),
    path('playlist/<str:playlist_id>/', views.playlist_songs, name='playlist_songs'),
    path('track/<str:track_id>/', views.track_play, name='track_play'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.loginUser, name="login"),
    path('logout/', views.logoutUser, name='logout'),
    path('spotify_login/', views.spotify_login, name='spotify_login'),
    path('spotify_callback/', views.spotify_callback, name='spotify_callback'),
    # path('top-tracks/', views.fetch_top_tracks, name='top-tracks'),
    # path('Artists/', views.RandomArtist, name='Artists'),
 ]


# playlist_tracks = sp.playlist_tracks(playlist_id)
#         # album data of playlist  
#         for album in playlist_tracks['items']:
#             playlist_album_type = album.get('album',{}).get('album_type','')
#             playlist_album_exr_url = album.get('album',{}).get('external_urls',{}).get('spotify','')
#             playlist_album_id = album.get('album',{}).get('id','')
#             playlist_album_image = album.get('album',{}).get('images',[{}])[0].get('url','')
#             playlist_album_name = album.get('album',{}).get('name','')
#             playlist_album_info.append({
#                 'album_type':playlist_album_type,
#                 'album_external_url':playlist_album_exr_url,
#                 'album_id':playlist_album_id,
#                 'album_image':playlist_album_image,
#                 'album_name':playlist_album_name,
#             })
