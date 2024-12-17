from django.db import models

class ImagePortfolio(models.Model):
    image_url = models.JSONField(default = list)
    image_title = models.CharField(max_length=100)
    image_description = models.TextField()
    
    
class VideoPorfolio(models.Model):
    video_url = models.URLField
    video_title = models.CharField(max_length=100)
    video_description = models.TextField()
    

    
