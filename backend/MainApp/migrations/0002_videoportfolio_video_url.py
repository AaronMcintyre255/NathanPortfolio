# Generated by Django 5.1.4 on 2024-12-18 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='videoportfolio',
            name='video_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]