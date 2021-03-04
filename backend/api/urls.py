from rest_framework_simplejwt import views as jwt_views
from django.urls import path

from api.views import ( ToDoListView )


urlpatterns = [
    path('todo/', ToDoListView.as_view()),
]