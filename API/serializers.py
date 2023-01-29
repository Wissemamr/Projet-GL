from rest_framework import serializers
from API.models import Annonce ,Wilaya ,Commune , Offre ,Offre_perso
import datetime
from drf_writable_nested import WritableNestedModelSerializer
from Utilisateur.serializer import UserSerializer
"""class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model=Categorie
        fields= "__all__"


class ThemeSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    
    class Meta:
        model=Thème
        fields= "__all__"
"""

class WilayaSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    
    class Meta:
        model=Wilaya
        fields= "__all__"


class CommuneSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    Wilaya=WilayaSerializer()
    class Meta:
        model=Commune
        fields= "__all__"    

class AnnoncesSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    """categorie=CategorieSerializer()
    thème=ThemeSerializer()"""
    class Meta:
        model=Annonce
        fields = ('id','titre','nomCat','thème','modalité','déposé_par','description','tarif','favoris','Wilaya','commune','adresse' ,'image')

    def create_annonce(self,data):
        return Annonce.objects.create(data)


class MesAnnoncesSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    """categorie=CategorieSerializer()
    thème=ThemeSerializer()"""
    class Meta:
        model=Annonce
        fields = ('id','titre','nomCat','thème','modalité','description','tarif','Wilaya','commune','adresse' ,'image')

    def create_annonce(self,data):
        return Annonce.objects.create(data)


class MesOffresSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    Annonce=Annonce
    user=UserSerializer
    class Meta:
        model=Offre
        fields = ('Annonce','inscrit')

    def create_annonce(self,data):
        return Annonce.objects.create(data)

class OffresSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    Offre=Offre
    déposé=UserSerializer
    class Meta:
        model=Offre_perso
        fields ='__all__'

    

