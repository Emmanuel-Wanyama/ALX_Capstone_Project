from rest_framework import serializers
from .models import User, Category, Transaction, Budget

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'type', 'user']
        read_only_fields = ['user']


class TransactionSerializer(serializers.ModelSerializer):
    # This field shows the category name instead of the category ID.
    category_name = serializers.ReadOnlyField(source='category.name')

    class Meta:
        model = Transaction
        fields = ['id', 'amount', 'description', 'date', 'category', 'category_name', 'user']
        read_only_fields = ['user']


class BudgetSerializer(serializers.ModelSerializer):
    # This field shows the category name instead of the category ID.
    category_name = serializers.ReadOnlyField(source='category.name')

    class Meta:
        model = Budget
        fields = ['id', 'amount', 'category', 'category_name', 'user']
        read_only_fields = ['user']