# Generated by Django 4.1.4 on 2023-01-26 17:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0008_delete_kikou_remove_thème_thème_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Wilaya',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomWilaya', models.CharField(max_length=255, null=True)),
                ('slug', models.SlugField(null=True, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='annonce',
            name='adresse',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.CreateModel(
            name='Commune',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomCommune', models.CharField(max_length=255, null=True)),
                ('slug', models.SlugField(null=True, unique=True)),
                ('Wilaya', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='thème', to='API.wilaya')),
            ],
        ),
        migrations.AddField(
            model_name='annonce',
            name='Wilaya',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='annonces', to='API.wilaya'),
        ),
        migrations.AddField(
            model_name='annonce',
            name='commune',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='annonces', to='API.commune'),
        ),
    ]
