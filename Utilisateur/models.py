from django.db import models
  
###utilisateur
class User(models.Model):

    Prénom = models.CharField(max_length=50)
    Nom= models.CharField(max_length=50)
    Num_tel = models.CharField(max_length=10)
    email = models.EmailField()
    Mot_de_passe= models.CharField(max_length=100)
    is_admin=models.BooleanField(default=False)
  
    def get_User_by_email(email):
        try:
            return User.objects.get(email=email)
        except:
            return False
  
    def exists(self):
        if User.objects.filter(email=self.email):
            return True
  
        return False