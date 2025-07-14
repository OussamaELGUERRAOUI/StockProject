from stockapp.formulaire import controller
from django.http import JsonResponse
from django.views.decorators.http import require_GET

import logging


logger = logging.getLogger(__name__)

@require_GET
def get_produits_ws(request):
    try:
        json_data = controller.get_produits()
        return JsonResponse(json_data, safe=False)

    except FileNotFoundError:
        logger.error(" Fichier introuvable dans get_produits().")
        return JsonResponse({'error': 'Fichier non trouvé.'}, status=404)

    except ValueError as ve:
        logger.error(f" Erreur de traitement des données : {ve}")
        return JsonResponse({'error': str(ve)}, status=400)

    except Exception as e:
        logger.exception(" Erreur inattendue dans get_produits_ws.")
        return JsonResponse({'error': 'Erreur serveur interne.'}, status=500)