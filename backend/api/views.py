from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer

from .models import Task, File


class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class TaskView(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class FileSerializer(ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'


class FileView(ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerializer
