from django.shortcuts import render
from API.models import Annonce
from django.http import Http404
from rest_framework import permissions
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from rest_framework.decorators   import api_view,APIView 
from rest_framework.response import Response
from django.http import JsonResponse,HttpResponseRedirect
from API.serializers import AnnoncesSerializer 
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import BaseUserManager
# Create your views here.


class AccountManager(BaseUserManager):
    def create_admin(self,email,user_name,mot_de_passe,**other_fields):
        other_fields.setdefault('is_admin',True)
        if other_fields.get('is_admin') is not True:
            raise ValueError("L'utilisateur n'est pas un administrateur!")
