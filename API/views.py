from django.shortcuts import render , redirect
from API.models import Annonce,Offre,Offre_perso
from django.urls import reverse
from django.http import Http404
from rest_framework.permissions import  IsAuthenticated ,IsAdminUser
from rest_framework import permissions,generics,viewsets 
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from rest_framework.decorators  import api_view,APIView ,permission_classes
from django.views.generic.list import ListView
from django.views.generic import UpdateView
from rest_framework.response import Response
from django.http import JsonResponse,HttpResponseRedirect
from API.serializers import AnnoncesSerializer ,MesAnnoncesSerializer,MesOffresSerializer , OffresSerializer
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from django.forms import Form
from rest_framework import status,filters
from Utilisateur.serializer import UserSerializer
from django.contrib.auth.models import User
from pydoc import html
import requests
from bs4 import BeautifulSoup
import csv
from itertools import zip_longest

#####################################Afficher toutes les annonces avec des filtres################################
@permission_classes((IsAuthenticated,))
class AnnonceList(generics.ListAPIView):
    queryset = Annonce.objects.all()
    permission_classes = (IsAuthenticated, )
    serializer_class = AnnoncesSerializer
    filter_backends = [DjangoFilterBackend,filters.SearchFilter]
    filterset_fields = ['nomCat','thème' ,'modalité','Wilaya','commune']
    search_fields=['titre','description']


###Créer une annonce    // IDK

class CréeAnnonce(generics.CreateAPIView):

    annonces=Annonce.objects.all()
    serializer_class=MesAnnoncesSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)



###################################### Déposer UNE ANNONCE###############################################
@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def Déposer(request):
    account=request.user
    annonces=Annonce(déposé_par=account)
    serializer=MesAnnoncesSerializer(annonces,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)

    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)  




########################################## Modifier une annonce##############################################


@api_view(['PUT','GET','POST'])
@permission_classes((IsAuthenticated,))  
def Modifier(request, id):
        
        annonce = Annonce.objects.get(id=id)
        depo=annonce.déposé_par_id
        us=request.user.id
        print(depo)
        print(us)
        
        if depo!=us :
            return Response({'response':"Interdit!"})
        
        else:
            data = request.data
            serializer = AnnoncesSerializer(annonce,data=data)
            if serializer.is_valid():
              
               serializer.save()
            
            return Response(serializer.data)         


#####################################Supprimer une annonce###################################

@permission_classes((IsAuthenticated,))
class SuppressionAnnonce(generics.DestroyAPIView):
    
    queryset=Annonce.objects.all()
    def Object(self,id):
       try:
           return Annonce.objects.get(slug=id)
       except Annonce.DoesNotExist:
        return Http404

  
    def get(self,request,id):
        annonce=get_object_or_404(Annonce,id=id)
        depo=annonce.déposé_par
        us=request.user
        if depo!=us :
            return Response({'response':"Interdit!"})
        
        else:
            annonce.delete()
            return Response('deleted', )
           
        


##########################AJOUTER AUX FAVORIS##########################################
@login_required
@api_view(['GET','POST'])
def ajouter_favoris(request,id):
    annonces=get_object_or_404(Annonce,id=id)
    if annonces.favoris.filter(id=request.user.id).exists():
        annonces.favoris.remove(request.user)
        return Response('removed', )
    else:
        annonces.favoris.add(request.user)
        return Response('added', )





################################Liste des annonces favoris#####################################
@login_required
@api_view(['GET'])
def liste_favoris(request):
    annonce=Annonce.objects.filter(favoris=request.user)
    serializer=AnnoncesSerializer(annonce,many=True)
    return  Response(serializer.data)





###############################Liste de mes Annonces #######################################
@login_required
@api_view(['GET'])
def liste_mes_annonces(request):
    annonce=Annonce.objects.filter(déposé_par=request.user)
    serializer=MesAnnoncesSerializer(annonce,many=True)
    return  Response(serializer.data)




########################Afficher les details d'une annonce####################################""
@permission_classes((IsAuthenticated,))
class AnnonceDetail(APIView):

    def Object(self,Annonce_id):
       try:
           return Annonce.objects.get(slug=Annonce_id)
       except Annonce.DoesNotExist:
        return Http404

  
    def get(self,request,id):
        annonce=get_object_or_404(Annonce,id=id)
        serializer=AnnoncesSerializer(annonce)
        
        return Response(serializer.data)


########################################### S'inscrire ################################################################


@login_required
@api_view(['GET','POST'])
def Inscription_Annonce(request,id):
    user=request.user
    annonce=get_object_or_404(Annonce,id=id)
    offre_perso,_=Offre_perso.objects.get_or_create(déposé=annonce.déposé_par)
    offre,généré=Offre.objects.get_or_create(inscrit=user,user=annonce.déposé_par,Annonce=annonce)
    offre_perso.offre.add(offre)
    offre_perso.save()
    return redirect(reverse("Annonce",kwargs={"id":id}))        


########################################### Liste de mes offres############################################


@login_required
@api_view(['GET','POST'])
def Mes_Offres(request):
    offre_perso=get_object_or_404(Offre_perso,déposé=request.user)
    offre=Offre.objects.filter(user=offre_perso.déposé)
    serializer=MesOffresSerializer(offre,many=True)
    return Response(serializer.data)

  



########################################### Rejter une offre ############################################

@permission_classes((IsAuthenticated,))
class Rejeter_Offre(generics.DestroyAPIView):
    
    queryset=Offre.objects.all()
    def Object(self,id):
       try:
           return Annonce.objects.get(slug=id)
       except Annonce.DoesNotExist:
        return Http404

  
    def get(self,request,id):
        offre=get_object_or_404(Offre,id=id)
        depo=offre.user_id
        us=request.user.id
        print(depo)
        if depo!=us :
            return Response({'response':"Interdit!"})
        
        else:
            offre.delete()
            return Response('Rejeté', )


######################################## Accepter une offre #################################################
######################################## Ajouter le web scrapping ##########################################"

@api_view(['GET','POST','PUT'])
def Scrap(request):

    permission_classes=(IsAdminUser, )
    # 2nd step : use request to fetch the URL
    pages=get_all_pages()
    result = requests.get("https://www.jemepropose.com/annonces/soutien-scolaire/?page=2")
    # 3rd save the page content or markup
    src = result.content
    #print(src)

    # 4th step : create a soup object to parse the content
    soup = BeautifulSoup(src, "lxml-xml")
    #soup = BeautifulSoup(src, html.parser)
    #print(soup.encode("utf-8"))

    annonces=soup.find_all('div',class_="col s12 popout-card p-unset")
    
    #for annonce in annonces:
    for a in annonces:
        
        titre=a.find("span",class_="card-title").text.strip()#done
        description=a.find("br").text.strip()
        adresse=a.find("a",class_="grey_jmp_text").text.strip() # done
        
        tarif=a.find("div",class_="col s12 left-align").text.strip()  #la ville

        image=a.find("img",src=True )
      
        annonce=Annonce.objects.get_or_create(titre=titre,description=description,adresse=adresse)
        
     
    # 5th step : find the elements containing the wanted infos
    # ad_title, ad_category, ad_description, ad_price, ad_place,
    
    #tarif=float(soup.find("span", class_="price").text.strip().replace("$", "")),
    #déposé_par= soup.find_all("a", ),
    #print(ad_description)
    
    
    serializer=MesAnnoncesSerializer(annonce, many=True) 
    return Response(serializer.data)

    



def get_all_pages():
    urls=[]
    page_number=2
    for i in range(624):
        i="https://www.jemepropose.com/annonces/soutien-scolaire/?page={page_number}"
        page_number+=1
        urls.append(i)

    return urls   



def WebScrapping(request):

    pages=get_all_pages()
    
    for page in pages:
         
        Scrap(url=page)
        print("on scrape {page}")

    return Response("return",)