from .models import ToDoList
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from api.serializers import ToDoSerializerList
from django.db import connection
from rest_framework.response import Response


class ToDoListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    queryset = ToDoList.objects.all()
    serializer_class = ToDoSerializerList

    def post(self, request, pk):
        # client_ip = self.get_client_ip(request)

        # cursor = connection.cursor()
        # cursor.execute(f"SELECT * FROM website.postlikes where post_liked='{pk}' and client_ip='{client_ip}'")
        # row = cursor.fetchone()

        # if not row:
        #     post = Post.objects.get(id=pk)
        #     likes = request.data['likes']
        #     post.likes = likes
        #     post.save()

        #     cursor.execute(f"INSERT INTO website.postlikes (post_liked, client_ip) values('{pk}', '{client_ip}')")

        #     data = {'succes': 1, 'status': '200'}

        #     return Response(data)
        # else:
        #     data = {'failed': 1, 'message': 'You already liked this article', 'status': '210'}
        #     return Response(data, status=210)
        pass