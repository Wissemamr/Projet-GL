from rest_framework import routers

from Utilisateur.views import MonProfil
from django.urls import path

"""router = routers.DefaultRouter()
router.register('me/', MonProfil, basename='me')
"""
urlpatterns = [
    path('me/<slug:id>',MonProfil)]