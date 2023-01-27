from django import forms
from .models import Annonce,Categorie,Thème


class SearchForm(forms.ModelForm):
    export_to_csv=forms.BooleanField(required=False)
    start_date=forms.DateTimeField(required=False)
    end_date=forms.DateTimeField(required=False)

    class Meta:
        model=Annonce
        fields=['categorie','thème','date','Wilaya','commune']