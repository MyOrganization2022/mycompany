from django.db import models


class Departments(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=100)


class Employees(models.Model):
    EmployeesId = models.AutoField(primary_key=True)
    EmployeesName = models.CharField(max_length=100)
    Department = models.CharField(max_length=100)
    DataOfJoining = models.DateTimeField()
    PhotoFileName = models.CharField(max_length=100)
