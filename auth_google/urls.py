"""auth_google URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.urls import path,include 
from django.conf.urls.static import static
from rest_framework import routers
from django.views.generic import TemplateView
"""from Utilisateur.urls import router as user_router

router = routers.DefaultRouter()
router.registry.extend(user_router.registry)

"""
urlpatterns = [
    path('Schoolers/annonce/', include('API.urls')),
    path('admin/', admin.site.urls),
    path('Schoolers/', include('Utilisateur.urls')),
    path('',TemplateView.as_view(template_name='auth_google/index.html')),
    path('accounts/', include('allauth.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)



