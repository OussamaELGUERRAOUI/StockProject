from django.contrib.auth.models import AbstractUser
from django.db import models

class Depot(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.nom

class CustomUser(AbstractUser):
    depot = models.ForeignKey(Depot, null=True, blank=True, on_delete=models.SET_NULL)
    is_admin = models.BooleanField(default=False)

class ExcelFichier(models.Model):
    utilisateur = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    fichier = models.FileField(upload_to="uploads/")
    date_upload = models.DateTimeField(auto_now_add=True)

class Resultat(models.Model):
    utilisateur = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    donnees = models.JSONField()
    date = models.DateTimeField(auto_now_add=True)