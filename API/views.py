from django.shortcuts import render
from API.models import Annonce,Categorie
from django.http import Http404
from rest_framework import permissions,generics,viewsets 
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from rest_framework.decorators  import api_view,APIView 
from django.views.generic.list import ListView
from django.views.generic import UpdateView
from rest_framework.response import Response
from django.http import JsonResponse,HttpResponseRedirect
from API.serializers import AnnoncesSerializer ,CategorieSerializer
from django.shortcuts import get_object_or_404
from Utilisateur.models import User
from django_filters.rest_framework import DjangoFilterBackend
from .forms import SearchForm
from django.forms import Form
from rest_framework.permissions import IsAuthenticatedOrReadOnly


#Afficher toutes les annonces avec des filtres

class AnnonceList(generics.ListAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnoncesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['thème' ,'categorie','Wilaya','commune']

###Créer une annonce
class CréeAnnonce(generics.CreateAPIView):
    annonces=Annonce.objects.all()
    serializer_class=AnnoncesSerializer 

"""### Modifier une annonce
class ModifierAnnonce(generics.UpdateAPIView):
    queryset = Annonce.objects.all()
    serializer_class=AnnoncesSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.slug = request.data.get("slug")
        instance.save()

        serializer = self.get_serializer(instance)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)"""


### Modifier une annonce
class ModifierAnnonce(generics.UpdateAPIView):
    queryset=Annonce.objects.all()
    serializer_class = AnnoncesSerializer
    def Object(self,categorie,thème,Annonce_slug):
       try:
           return Annonce.objects.filter(categorie=categorie).filter(thème=thème).get(slug=Annonce_slug)
       except Annonce.DoesNotExist:
        return Http404

  
    def get(self,request,thème,categorie,Annonce_slug):
        annonces=self.Object(categorie,thème,Annonce_slug)
        return Response('Added', )

##Supprimer une annonce
class SuppressionAnnonce(generics.DestroyAPIView):
    
    queryset=Annonce.objects.all()
    def Object(self,categorie,thème,Annonce_slug):
       try:
           return Annonce.objects.filter(categorie=categorie).filter(thème=thème).get(slug=Annonce_slug)
       except Annonce.DoesNotExist:
        return Http404

  
    def get(self,request,thème,categorie,Annonce_slug):
        annonces=self.Object(categorie,thème,Annonce_slug)
        annonces.delete()
        return Response('deleted', )


##Ajouter une annonce aux favoris
@login_required
def ajouter_favoris(request,id):
    annonces=get_object_or_404(Annonce,id=id)
    if annonces.favoris.filter(id=request.user.id).exists():
        annonces.favoris.remove(request.user)
    else:
        annonces.favoris.add(request.user)

    return HttpResponseRedirect(request.META['HTTP_REFER'])    





##Liste des annonces favoris
@login_required
@api_view(['GET'])
def liste_favoris(request):
    annonce=Annonce.objects.filter(favoris=request.user)
    serializer=AnnoncesSerializer(annonce,many=True)
    return  Response(serializer.data)



##Afficher les details d'une annonce
class AnnonceDetail(APIView):

    def Object(self,categorie,thème,Annonce_slug):
       try:
           return Annonce.objects.filter(categorie=categorie).filter(thème=thème).get(slug=Annonce_slug)
       except Annonce.DoesNotExist:
        return Http404

  
    def get(self,request,thème,categorie,Annonce_slug):
        annonce=self.Object(categorie,thème,Annonce_slug)
        serializer=AnnoncesSerializer(annonce)
        return Response(serializer.data)



def kikou(request):
    serializer=AnnoncesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)    
