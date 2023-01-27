from rest_framework import serializers
from Utilisateur.models import User


class UserSerializer(serializers.ModelSerializer):
    model=User
    class Meta:
        fields = '__all__' 
