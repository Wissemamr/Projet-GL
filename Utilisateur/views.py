from django.shortcuts import render
from django.http import Http404
from rest_framework import permissions
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from rest_framework.decorators   import api_view,APIView 
from rest_framework.response import Response
from rest_framework import permissions,generics,viewsets 
from django.http import JsonResponse,HttpResponseRedirect
from Utilisateur.serializer import UserSerializer 
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
# Create your views here.


"""class MoProfil(APIView):
    def Object(self,id):
       try:
           return User.objects.get(id=id)
       except User.DoesNotExist:
        return Http404

  
    def get(request,id):
        
        user=User.objects.get(request.user.id)

        print(user.id)
        serializer=UserSerializer(user)
        return Response(serializer.data)"""

@api_view(['POST','GET'])

def MonProfil(request,id):
        user=User.objects.get(id=request.user.id)
        print(request.user.id)
        user_data=UserSerializer(user).data
        return Response(user_data)