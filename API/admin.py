from django.contrib import admin

# Register your models here.
from . import models


admin.site.register(models.Categorie)
admin.site.register(models.Annonce)
admin.site.register(models.Thème)
admin.site.register(models.reponse_message)
admin.site.register(models.message)