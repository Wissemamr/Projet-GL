from django.db import models
import datetime
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify
# Create your models here.


## Modèle Catégorie
class Categorie(models.Model):
    nomCat=models.CharField(max_length=255,null=True)
    slug = models.SlugField(unique=True, null=True)

    def get_all_categories():
        return Categorie.objects.all()

    def __str__(self):
        return self.nomCat

    def get_url(self):
        return f'/{self.slug}/'

    def save(self,*args,**kwargs):
        self.slug=slugify(self.nomCat)
        super().save(*args,**kwargs)

###Modèle Thème
class Thème(models.Model):

    catégorie=models.ForeignKey(Categorie,on_delete=models.CASCADE,related_name='thème',null=True)
    nomTheme=models.CharField(max_length=255,null=True)
    slug = models.SlugField(unique=True, null=True)
    def __str__(self):
        return self.nomTheme

    def save(self,*args,**kwargs):
        self.slug=slugify(self.nomTheme)
        super().save(*args,**kwargs)

class Wilaya(models.Model):

   
    nomWilaya=models.CharField(max_length=255,null=True)
    slug = models.SlugField(unique=True, null=True)
    def __str__(self):
        return self.nomTheme

    def save(self,*args,**kwargs):
        self.slug=slugify(self.nomTheme)
        super().save(*args,**kwargs)


class Commune(models.Model):

    Wilaya=models.ForeignKey(Wilaya,on_delete=models.CASCADE,related_name='thème',null=True)
    nomCommune=models.CharField(max_length=255,null=True)
    slug = models.SlugField(unique=True, null=True)
    def __str__(self):
        return self.nomTheme

    def save(self,*args,**kwargs):
        self.slug=slugify(self.nomTheme)
        super().save(*args,**kwargs)        

###Modèle Annonce
class Annonce(models.Model):
    thème=models.ForeignKey(Thème,related_name='annonces',on_delete=models.CASCADE,null=True)
    categorie=models.ForeignKey(Categorie,related_name='annonces',on_delete=models.CASCADE, null=True)
    modalité=models.CharField(max_length=100, null=True)  # en ligne ou pas
    description=models.TextField(blank=True,null=True)
    slug=models.SlugField(null=True)
    déposé_par=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    image=models.ImageField(upload_to='media/uploads',   blank=True,null=True)
    tarif=models.DecimalField('Price',
                                max_digits=15,
                                decimal_places=2,
                                default=0.00)
    favorites=models.ManyToManyField(User,related_name='favorite',default=None,blank=True)
    date=models.DateTimeField( default=datetime.datetime.today)
    adresse=models.TextField(blank=True,null=True)
    Wilaya=models.ForeignKey(Wilaya,related_name='annonces',on_delete=models.CASCADE, null=True)
    commune=models.ForeignKey(Commune,related_name='annonces',on_delete=models.CASCADE, null=True)
    def get_modalité(self):
        return self.modalité

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000'+ self.image.url
        return '' 
    def get_url(self):
        return f'/{self.categorie.slug}/{self.slug}/'
    
    def __str__(self):
        return self.slug
        
    def get_all_annonce_by_categoryid(categorie_id):
        if categorie_id:
            return Annonce.objects.filter(categorie=categorie_id)
        else:
            return Annonce.get_all_products()

class message(models.Model):
    annonce=models.ForeignKey(Annonce,null=True,on_delete=models.CASCADE,related_name='message')
    nom_message=models.CharField(max_length=100,blank=True,null=True)
    auteur=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    corps=models.TextField(max_length=500,null=True)
    date=models.DateTimeField(default=datetime.datetime.today)


    def save(self,*args,**kwargs):
         self.nom_message=slugify("Message de " +  str(self.auteur) + "à" + str(self.date))
         super.save(*args,**kwargs)


    def  __str__(self):
        return self.nom_message   

    class Meta:
        ordering=['-date']



class reponse_message(models.Model):
            nom_message=models.ForeignKey(message,on_delete=models.CASCADE,related_name='réponse',null=True)
            corps=models.TextField(max_length=500,null=True)
            auteur=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
            date=models.DateTimeField(default=datetime.datetime.today)


            def __str__(self):
                return "réponse à " + str(self.nom_message)
