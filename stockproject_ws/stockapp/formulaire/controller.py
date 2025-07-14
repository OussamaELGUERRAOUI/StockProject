import pandas as pd


def get_produits():
    df = pd.read_excel("data/baseFormulaire.xlsx")

    segment_dict = {}

    for (segment, format_), group in df.groupby(['SEGMENT', 'FORMAT']):
        produits = group[['CODE', 'FLAVOR']].to_dict(orient='records')
        
        if segment not in segment_dict:
            segment_dict[segment] = []
        
        segment_dict[segment].append({
            'format': format_,
            'produits': produits
        })

    json_data = [
        {
            'segment': segment,
            'formats': formats
        }
        for segment, formats in segment_dict.items()
    ]
    
    return json_data 


