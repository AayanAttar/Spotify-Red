# Spotify-Red

A Django-based Spotify clone that allows users to browse, play, and interact with music. This project integrates the Spotify API for fetching music data and includes user authentication, song recommendations, and dynamic lyrics generation.

Features

User Authentication: Sign up, log in, and log out functionality.

Spotify API Integration: Fetches top tracks, artists, and playlists.

Music Streaming: Play songs directly from the app.

Lyrics Generation: Displays song lyrics in real-time.

Dynamic UI: Fully responsive frontend built with HTML, CSS, and JavaScript.

Search Functionality: Search for artists, albums, and tracks.

Database Management: Uses SQLite (or PostgreSQL) to store user data.

Project Structure

D:/Projects/Django/Spotify/
│── Spotify_clone/      # Main Django Project
│   │── manage.py       # Django entry point
│   │── spotifyapp/     # Main application
│   │── static/         # Static files (CSS, JS, images)
│   │── templates/      # HTML templates
│   │── .env            # Environment variables (DO NOT SHARE)
│   │── db.sqlite3      # Database file
│   │── requirements.txt # Dependencies
│
│── my_spot_env/        # Virtual environment (DO NOT COMMIT)

Installation and Setup

Prerequisites

Python 3.x

pip (Python package manager)

Virtual environment (recommended)

Step 1: Clone the Repository

git clone https://github.com/your-username/spotify-clone.git
cd spotify-clone

Step 2: Create and Activate Virtual Environment

python -m venv my_spot_env
# Windows
my_spot_env\Scripts\activate
# macOS/Linux
source my_spot_env/bin/activate

Step 3: Install Dependencies

pip install -r requirements.txt

Step 4: Set Up Environment Variables

Create a .env file in the root directory and add your credentials:

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
DEBUG=True
SECRET_KEY=your_secret_key

Step 5: Apply Migrations

python manage.py migrate

Step 6: Run the Development Server

python manage.py runserver

Usage

Open http://127.0.0.1:8000/ in your browser.

Register or log in.

Browse and play music.

Deployment

To deploy, use Heroku or Render:

pip install gunicorn
heroku create
heroku config:set $(cat .env | xargs)  # Set environment variables

Technologies Used

Backend: Django, Django REST Framework

Frontend: HTML, CSS, JavaScript

Database: SQLite (or PostgreSQL for production)

APIs: Spotify API

License

This project is licensed under the MIT License.

Contributing

Pull requests are welcome! Open an issue for any feature requests or bug reports.

💡 Developed by Aayan 🚀