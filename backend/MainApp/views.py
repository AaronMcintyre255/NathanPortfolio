from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import VideoPortfolio
from .serializers import VideoSerializer

class VideoListAPIView(APIView):
    def get(self, request):
        videos = VideoPortfolio.objects.all()
        serializer = VideoSerializer(videos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)