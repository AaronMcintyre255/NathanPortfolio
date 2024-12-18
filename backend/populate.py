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
        'video_url': 'https://example.com/video4',
        'video_title': 'Sample Video 4',
        'video_description': 'This is the description for Sample Video 4.',
        
    },
    {
        'video_url': 'https://example.com/video4',
        'video_title': 'Sample Video 4',
        'video_description': 'This is the description for Sample Video 4.',
        
    },
    {
        'video_url': 'https://example.com/video4',
        'video_title': 'Sample Video 4',
        'video_description': 'This is the description for Sample Video 4.',
        
    },
    {
        'video_url': 'https://example.com/video4',
        'video_title': 'Sample Video 4',
        'video_description': 'This is the description for Sample Video 4.',
        
    },
    {
        'video_url': 'https://example.com/video4',
        'video_title': 'Sample Video 4',
        'video_description': 'This is the description for Sample Video 4.',
        
    },
    {
        'video_url': 'https://example.com/video4',
        'video_title': 'Sample Video 4',
        'video_description': 'This is the description for Sample Video 4.',
        
    },
    {
        'video_url': 'https://example.com/video4',
        'video_title': 'Sample Video 4',
        'video_description': 'This is the description for Sample Video 4.',
        
    },
    {
        'video_url': 'https://example.com/video4',
        'video_title': 'Sample Video 4',
        'video_description': 'This is the description for Sample Video 4.',
        
    }
]

# Add the videos to the database
for video in videos:
    VideoPortfolio.objects.create(**video)

print("Videos have been successfully populated!")