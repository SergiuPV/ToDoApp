from api.models import ToDoList
from rest_framework import serializers


class ToDoSerializerList(serializers.ModelSerializer):
    class Meta:
        model = ToDoList
        fields = ( 'id', 'name', 'text')