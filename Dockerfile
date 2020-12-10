FROM openjdk:15-oracle
ENV ENVIROMENT=prod

MAINTAINER Malte Böhm <boemalte@gmail.com>

ADD backend/target/secret-allergy.jar app.jar

CMD ["sh" , "-c", "java -jar -Dserver.port=$PORT -Djwt.secretkey=$JWT_SECRETKEY -Dspring.data.mongodb.uri=$MONGO_DB_URI app.jar"]
