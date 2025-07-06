import pandas as pd
from stockapp.utilisateur import controller
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def creer_utilisateur(request):
    """
    Reçoit nom, prénom, email, depot, état
    ➜ Génère un mot de passe
    ➜ Ajoute l'utilisateur à utilisateurs.xlsx
    ➜ Retourne les infos + mot de passe
    """
    data = request.data
    try:
        result = controller.create_new_user(data)
        return Response(result)
    except ValueError as e:
        return Response({'error': str(e)}, status=400)
    except FileNotFoundError as e:
        return Response({'error': str(e)}, status=500)


@api_view(['GET'])
def liste_utilisateurs(request):
    data = controller.get_utilisateurs()
    return Response(data)


@api_view(['POST'])
def ajouter_utilisateur(request):
    try:
        data = request.data
        result = controller.ajouter_utilisateur_controller(data)
        return Response(result)
    except ValueError as e:
        return Response({'error': str(e)}, status=400)
    except FileNotFoundError as e:
        return Response({'error': str(e)}, status=500)