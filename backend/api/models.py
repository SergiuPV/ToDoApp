from django.db import models


class ToDoList(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)
    text = models.CharField(max_length=255)
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'todo_list'
        app_label= 'api'