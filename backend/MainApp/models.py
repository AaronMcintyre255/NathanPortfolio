from django.db import models

class ImagePortfolio(models.Model):
    image_url = models.JSONField(default = list)
    image_title = models.CharField(max_length=100)
    image_description = models.TextField()
    
    def __str__(self):
        return self.name
    
    
class VideoPortfolio(models.Model):
    video_url = models.URLField(blank=True, null=True)
    video_title = models.CharField(max_length=255)
    video_description = models.TextField()
    video_thumbnail = models.URLField(blank=True, null=True)
    
    def __str__(self):
        return self.video_title
    

    
