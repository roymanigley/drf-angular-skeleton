# Use an official Python runtime as a parent image
FROM python:3.10-alpine

# Set the working directory
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the working directory
COPY . .

RUN mkdir -p static
RUN mkdir -p media

# Create a dedicated user for Nginx
RUN adduser -D -H -u 1001 -s /sbin/nologin appuser

RUN chown appuser static -R
RUN chown appuser media -R

USER appuser

# Expose port 8000
EXPOSE 8000

# Start the Django development server
CMD ["./run.sh"]
