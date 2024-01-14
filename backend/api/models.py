from django.db import models


class Task(models.Model):

    class Status(models.Choices):
        NOT_STARTED = 'NOT_STARTED'
        STARTED = 'STARTED'
        COMPLETED = 'COMPLETED'

    title = models.CharField(max_length=255)
    description = models.TextField()
    status = models.CharField(choices=Status.choices, default=Status.NOT_STARTED, max_length=255)

