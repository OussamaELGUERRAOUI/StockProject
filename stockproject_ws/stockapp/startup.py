import os
import pandas as pd

EXCEL_USERS_PATH = 'data/utilisateurs.xlsx'
EXCEL_DEPOTS_PATH = 'data/depots.xlsx'

def generer_excel_si_absent():
    # Créer utilisateurs.xlsx
    if not os.path.exists(EXCEL_USERS_PATH):
        print("✅ Création de utilisateurs.xlsx")
        os.makedirs(os.path.dirname(EXCEL_USERS_PATH), exist_ok=True)
        df = pd.DataFrame(columns=[
            'nom', 'prenom', 'email', 'mot_de_passe', 'depot', 'etat_utilisateur'
        ])
        df.to_excel(EXCEL_USERS_PATH, index=False)
    else:
        print("📄 utilisateurs.xlsx déjà présent.")

    # Créer depots.xlsx
    if not os.path.exists(EXCEL_DEPOTS_PATH):
        print("✅ Création de depots.xlsx")
        df = pd.DataFrame(columns=['nom_depot', 'description'])
        df.to_excel(EXCEL_DEPOTS_PATH, index=False)
    else:
        print("📄 depots.xlsx déjà présent.")
    print("✅ Vérification des fichiers Excel terminée.")