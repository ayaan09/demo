from django.urls import path
from . import views

urlpatterns = [
    path('', views.my_view, name='my_view'),
    path('myview/', views.my_view, name='my_view'),
    path('second/', views.second, name='second'),
]