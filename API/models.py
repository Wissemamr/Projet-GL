from django.db import models
import datetime
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify
# Create your models here.


## Modèle Catégorie
"""class Categorie(models.Model):
    Choices = (
        ('Primaire', 'Primaire'),
        ('Collège', 'Collège'),
        ('Lycée', 'Lycée'),
    )
    nomCat=models.CharField(max_length=255,null=True,choices=Choices)
  #  slug = models.SlugField(unique=True, null=True)

    def get_all_categories():
        return Categorie.objects.all()

    def __str__(self):
        return self.nomCat
    def get_url(self):
        return f'/{self.slug}/'

    def save(self,*args,**kwargs):
        self.slug=slugify(self.nomCat)
        super().save(*args,**kwargs)"""

###Modèle Thème
""""class Thème(models.Model):

    categorie=models.ForeignKey(Categorie,on_delete=models.CASCADE,related_name='thème',null=True)
    nomTheme=models.CharField(max_length=255,null=True)
    slug = models.SlugField(unique=True, null=True)
    def __str__(self):
        return self.nomTheme

    def save(self,*args,**kwargs):
        self.slug=slugify(self.nomTheme)
        super().save(*args,**kwargs)"""

class Wilaya(models.Model):

   
    nomWilaya=models.CharField(max_length=255,null=True)
    slug = models.SlugField(unique=True, null=True)
    """def __str__(self):
        return self.nomWilaya"""

    def save(self,*args,**kwargs):
        self.slug=slugify(self.nomWilaya)
        super().save(*args,**kwargs)


class Commune(models.Model):

    Wilaya=models.ForeignKey(Wilaya,on_delete=models.CASCADE,related_name='thème',null=True)
    nomCommune=models.CharField(max_length=255,null=True)
    """def __str__(self):
        return self.nomTheme"""

    def save(self,*args,**kwargs):
        self.slug=slugify(self.nomTheme)
        super().save(*args,**kwargs)        


###Modèle Annonce
class Annonce(models.Model):
    Choices = (
        ('En-Ligne', 'En-Ligne'),
        ('Hors-Ligne', 'Hors-Ligne'),
        
    )
    cat = (
        ('Primaire', 'Primaire'),
        ('Collège', 'Collège'),
        ('Lycée', 'Lycée'),
    )
    nomCat=models.CharField(max_length=255,null=True,choices=cat)
    #thème=models.ForeignKey(Thème,related_name='annonces',on_delete=models.CASCADE,null=True)
    #categorie=models.ForeignKey(Categorie,related_name='annonces',on_delete=models.CASCADE, null=True)
    modalité=models.CharField(max_length=100, choices=Choices , null=True)  # en ligne ou pas
    titre=models.CharField(max_length=255,null=True)
    thème=models.CharField(max_length=255,null=True)
    description=models.TextField(blank=True,null=True)
    slug=models.SlugField(null=True)
    déposé_par=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    image=models.ImageField(upload_to='media/uploads',   blank=True,null=True)
    tarif=models.DecimalField('Price',
                                max_digits=15,
                                decimal_places=2,
                                default=0.00)
    favoris=models.ManyToManyField(User,related_name='favorite',default=None,blank=True)
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
   
    
    """def __str__(self):
        return self.slug"""
        
    """def get_all_annonce_by_categoryid(categorie_id):
        if categorie_id:
            return Annonce.objects.filter(categorie=categorie_id)
        else:
            return Annonce.get_all_products()"""


class Offre(models.Model):
    Annonce=models.ForeignKey(Annonce,on_delete=models.CASCADE,null=True)
    inscrit=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    déposé=models.ForeignKey(User,related_name="déposé_par",on_delete=models.CASCADE,null=True)

    def get_inscrit(self):
        return self.inscrit   

    def __str__(self):
        return f"{self.Annonce.titre} ({self.inscrit.first_name} {self.inscrit.last_name})"




class Offre_perso(models.Model):
    offre=models.ManyToManyField(Offre)
    déposé=models.OneToOneField(User,on_delete=models.CASCADE)

    def get_inscrit(self):
        return self.inscrit   

    def __str__(self):
        return self.déposé.username

