import pandas as pd
import os, random, string


EXCEL_PATH = 'data/utilisateurs.xlsx'

def create_new_user(data):
    """
    Create a new user with a generated password and save to the Excel file.
    Returns the user information along with the generated password.
    """
   

    required_fields = ['nom', 'prenom', 'email', 'depot', 'etat_utilisateur']

    if not all(field in data for field in required_fields):
        raise ValueError('Champs manquants')

    if not os.path.exists(EXCEL_PATH):
        raise FileNotFoundError('Fichier Excel introuvable')

    df = pd.read_excel(EXCEL_PATH)

    if data['email'] in df['email'].values:
        raise ValueError('Cet utilisateur existe déjà')

    mot_de_passe = generer_mot_de_passe()
    nouveau_user = {
        'nom': data['nom'],
        'prenom': data['prenom'],
        'email': data['email'],
        'mot_de_passe': mot_de_passe,
        'depot': data['depot'],
        'etat_utilisateur': data['etat_utilisateur']
    }

    df = pd.concat([df, pd.DataFrame([nouveau_user])], ignore_index=True)
    df.to_excel(EXCEL_PATH, index=False)

    return {**nouveau_user, 'status': 'utilisateur ajouté'}

# Générateur de mot de passe aléatoire
def generer_mot_de_passe(longueur=8):
    chars = string.ascii_letters + string.digits
    return ''.join(random.choice(chars) for _ in range(longueur))

def get_utilisateurs():
    df = pd.read_excel(EXCEL_PATH)
    data = df.to_dict(orient='records')
    return data

def ajouter_utilisateur_controller(data):
    required_fields = ['nom', 'prenom', 'email', 'depot', 'etat_utilisateur']
    if not all(field in data for field in required_fields):
        raise ValueError('Champs manquants')

    if not os.path.exists(EXCEL_PATH):
        raise FileNotFoundError('Fichier Excel introuvable')

    df = pd.read_excel(EXCEL_PATH)

    if data['email'] in df['email'].values:
        raise ValueError('Email déjà utilisé')

    mot_de_passe = generer_mot_de_passe()
    nouveau = {
        'nom': data['nom'],
        'prenom': data['prenom'],
        'email': data['email'],
        'mot_de_passe': mot_de_passe,
        'depot': data['depot'],
        'etat_utilisateur': data['etat_utilisateur']
    }

    df = pd.concat([df, pd.DataFrame([nouveau])], ignore_index=True)
    df.to_excel(EXCEL_PATH, index=False)

    return {**nouveau, 'status': 'ajouté'}