
from django.contrib.auth.models import User
from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer
from Utilisateur.models import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = ('numTel', 'Adresse')


class UserSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):

    profile = UserProfileSerializer(source='userprofile')

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'profile')
