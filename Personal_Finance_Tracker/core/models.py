from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass

class Category(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=10, choices=[('income', 'Income'), ('expense', 'Expense')])
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='categories')

    def __str__(self):
        return f"{self.name} ({self.type}) for {self.user.username}"

class Transaction(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=255, blank=True, null=True)
    date = models.DateField()
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='transactions')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transactions')
    
    def __str__(self):
        return f"KES {self.amount} for {self.description} on {self.date}"

class Budget(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='budgets')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='budgets')
    
    def __str__(self):
        return f"KES {self.amount} budget for {self.category.name}"