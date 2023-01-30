
from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class UserProfile(models.Model):

    account = models.OneToOneField(User, on_delete=models.CASCADE)

    numTel = models.IntegerField()
    Adresse = models.CharField(max_length=255)
