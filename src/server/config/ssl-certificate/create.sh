openssl genrsa -des3 -out server.key 1024
openssl req -new -key server.key -out server.csr
openssl x509 -req -days 1024 -in server.csr -signkey server.key -out server.crt
