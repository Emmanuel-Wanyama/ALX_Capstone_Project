from django.urls import path
from .views import RegisterView, LoginView
from .views import (
    TransactionListCreateView, TransactionDetailView, 
    CategoryListCreateView, CategoryDetailView )
from .views import DashboardView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('transactions/', TransactionListCreateView.as_view(), name='transaction-list-create'),
    path('transactions/<int:pk>/', TransactionDetailView.as_view(), name='transaction-detail'),
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),
    path('dashboard/', DashboardView.as_view(), name='dashboard-summary'),
]
