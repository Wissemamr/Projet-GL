from rest_framework import routers

from Utilisateur.views import MonProfil , Modifier
from django.urls import path

"""router = routers.DefaultRouter()
router.register('me/', MonProfil, basename='me')
"""
urlpatterns = [
    path('MonProfile/',MonProfil),
    path('ModifierProfile/',Modifier)
    ]