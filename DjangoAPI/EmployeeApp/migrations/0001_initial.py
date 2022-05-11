# Generated by Django 4.0.4 on 2022-04-27 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Departments',
            fields=[
                ('DepartmentId', models.AutoField(primary_key=True, serialize=False)),
                ('DepartmentName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Employees',
            fields=[
                ('EmployeesId', models.AutoField(primary_key=True, serialize=False)),
                ('EmployeesName', models.CharField(max_length=100)),
                ('Department', models.CharField(max_length=100)),
                ('DataOfJoining', models.DateTimeField()),
                ('PhotoFileName', models.CharField(max_length=100)),
            ],
        ),
    ]
