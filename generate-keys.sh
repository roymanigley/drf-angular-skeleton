mkdir -p nginx/ssl
openssl genpkey -algorithm RSA -out nginx/ssl/private.key
openssl req -new -key nginx/ssl/private.key -out nginx/ssl/csr.pem
openssl x509 -req -days 365 -in nginx/ssl/csr.pem -signkey nginx/ssl/private.key -out nginx/ssl/server.crt

