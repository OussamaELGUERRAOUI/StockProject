


from django.urls import path
from stockapp.utilisateur.service import creer_utilisateur, liste_utilisateurs, ajouter_utilisateur
from stockapp.formulaire.service import get_produits_ws as get_produits  


urlpatterns = [
    path('api/utilisateurs/creer/', creer_utilisateur),
    path('api/utilisateurs/', liste_utilisateurs),
    path('api/utilisateurs/ajouter/', ajouter_utilisateur),
    path('api/produits/', get_produits),
]
