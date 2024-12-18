from rest_framework import serializers
from .models import VideoPortfolio

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoPortfolio
        fields = ['video_url', 'video_title', 'video_description', 'video_thumbnail']
