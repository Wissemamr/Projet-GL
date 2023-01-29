
from django.contrib import admin
from django.urls import path

from . import views
"""from rest_framework import routers
router = routers.DefaultRouter()
router.register('Annoncefilter',views.Annonce_list)"""
urlpatterns=[
    
    path('liste/',views.AnnonceList.as_view()),
    path('Supprimer/<slug:id>/',views.SuppressionAnnonce.as_view()),
    path('Modifier/<slug:id>/',views.Modifier),
    path('Déposer/',views.Déposer),
    path('Details/<slug:id>/',views.AnnonceDetail.as_view(),name="Annonce"),
    path('Favoris/<slug:id>/',views.ajouter_favoris),
    path('Liste_Favoris/',views.liste_favoris),
    path('Mes_Annonces/',views.liste_mes_annonces),
    path('Inscription/<slug:id>/',views.Inscription_Annonce),
    path('Mes_Offres/', views.Mes_Offres)
]