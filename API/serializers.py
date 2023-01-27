from rest_framework import serializers
from API.models import Annonce, Categorie , Thème ,Wilaya ,Commune
import datetime
from drf_writable_nested import WritableNestedModelSerializer
from Utilisateur.serializer import UserSerializer
class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model=Categorie
        fields='__all__'


class ThemeSerializer(serializers.ModelSerializer):
    #categorie=CategorieSerializer()
    class Meta:
        model=Thème
        fields='__all__'


class WilayaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Wilaya
        fields='__all__'


class CommuneSerializer(serializers.ModelSerializer):
    Wilaya=WilayaSerializer()
    class Meta:
        model=Commune
        fields='__all__'        

class AnnoncesSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    categorie=CategorieSerializer()
    thème=ThemeSerializer()
    class Meta:
        model=Annonce
        fields = '__all__' 

    def create_annonce(self,data):
        return Annonce.objects.create(data)

class MessagesSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    annonce=AnnoncesSerializer()
    utilisateur=UserSerializer()
    class Meta:
        model=Annonce
        fields = '__all__' 


class MessagesSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    annonce=AnnoncesSerializer()
    utilisateur=UserSerializer()
    class Meta:
        model=Annonce
        fields = '__all__' 

    

 