from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Video
from .serializers import VideoSerializer

class VideoListAPIView(APIView):
    def get(self, request):
        videos = Video.objects.all().order_by('-created_at')
        serializer = VideoSerializer(videos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)