#!/bin/sh
python manage.py migrate
python manage.py collectstatic --noinput
gunicorn conf.wsgi:application --bind 0.0.0.0:8000 --workers 4
