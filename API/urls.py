
from django.contrib import admin
from django.urls import path

from . import views
"""from rest_framework import routers
router = routers.DefaultRouter()
router.register('Annoncefilter',views.Annonce_list)"""
urlpatterns=[
    
    path('liste/',views.AnnonceList.as_view()),
    #path('liste/',views.liste),
    path('Supprimer/<slug:categorie>/<slug:thème>/<slug:Annonce_slug>/',views.SuppressionAnnonce.as_view()),
    path('Modifier/<slug:categorie>/<slug:thème>/<slug:Annonce_slug>/',views.ModifierAnnonce.as_view()),
    path('crée/',views.CréeAnnonce.as_view()),
    path('<slug:categorie>/<slug:thème>/<slug:Annonce_slug>/',views.AnnonceDetail.as_view()),
    path('Favoris/<slug:id>/',views.ajouter_favoris),
    path('Favorislist/',views.liste_favoris)
]