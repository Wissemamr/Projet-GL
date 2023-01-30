from django.contrib import admin

# Register your models here.
from . import models

"""
admin.site.register(models.Categorie)

admin.site.register(models.Thème)"""
admin.site.register(models.Wilaya)
admin.site.register(models.Commune)
admin.site.register(models.Offre)
admin.site.register(models.Annonce)
admin.site.register(models.Offre_perso)