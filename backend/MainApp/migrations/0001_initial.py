# Generated by Django 5.1.4 on 2024-12-18 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ImagePortfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_url', models.JSONField(default=list)),
                ('image_title', models.CharField(max_length=100)),
                ('image_description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='VideoPortfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video_title', models.CharField(max_length=255)),
                ('video_description', models.TextField()),
                ('video_thumbnail', models.URLField(blank=True, null=True)),
            ],
        ),
    ]
