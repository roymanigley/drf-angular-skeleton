# Generated by Django 5.0.1 on 2024-01-14 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_task_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('file', models.FileField(upload_to='files')),
            ],
        ),
        migrations.AlterField(
            model_name='task',
            name='status',
            field=models.CharField(choices=[('NOT_STARTED', 'Not Started'), ('STARTED', 'Started'), ('COMPLETED', 'Completed')], default='NOT_STARTED', max_length=255),
        ),
    ]