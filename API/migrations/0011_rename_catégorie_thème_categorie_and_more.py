# Generated by Django 4.1.4 on 2023-01-27 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0010_remove_reponse_message_auteur_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='thème',
            old_name='catégorie',
            new_name='categorie',
        ),
        migrations.AlterField(
            model_name='categorie',
            name='nomCat',
            field=models.CharField(choices=[('Primaire', 'Primaire'), ('Collège', 'Collège'), ('Lycée', 'Lycée')], max_length=255, null=True),
        ),
    ]
