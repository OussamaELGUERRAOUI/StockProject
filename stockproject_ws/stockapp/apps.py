from django.apps import AppConfig

class StockappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'stockapp'

    def ready(self):
        from .startup import generer_excel_si_absent
        generer_excel_si_absent()
        print("✅ StockappConfig ready() called. Excel file check completed.")