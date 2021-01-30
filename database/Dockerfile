FROM mongo:bionic

ENV MONGO_INITDB_ROOT_USERNAME: 'root'

ENV MONGO_INITDB_ROOT_PASSWORD: 'mypassword'

ENV MONGO_INITDB_DATABASE: practice

COPY ["init-mongo.js", "/docker-entrypoint-initdb.d/"]

EXPOSE 27017