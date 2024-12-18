import os
import django

# Set up Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings") 
django.setup()

# Import your models after Django setup
from MainApp.models import VideoPortfolio

# Sample video data
videos = [
    {
        'video_url': 'https://example.com/video1',
        'video_title': 'Sample Video 1',
        'video_description': 'This is the description for Sample Video 1.',
        'video_thumbnail': 'https://example.com/thumbnail1.jpg'
    },
    {
        'video_url': 'https://example.com/video2',
        'video_title': 'Sample Video 2',
        'video_description': 'This is the description for Sample Video 2.',
        'video_thumbnail': 'https://example.com/thumbnail2.jpg'
    },
    {
        'video_url': 'https://example.com/video3',
        'video_title': 'Sample Video 3',
        'video_description': 'This is the description for Sample Video 3.',
        'video_thumbnail': 'https://example.com/thumbnail3.jpg'
    },
    {
        'video_url': 'https://example.com/video4',
        'video_title': 'Sample Video 4',
        'video_description': 'This is the description for Sample Video 4.',
        'video_thumbnail': 'https://example.com/thumbnail4.jpg'
    }
]

# Add the videos to the database
for video in videos:
    VideoPortfolio.objects.create(**video)

print("Videos have been successfully populated!")