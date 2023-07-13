FROM maven:3.9.3-eclipse-temurin-17 AS build
COPY /backend/src /app/src
COPY /backend/pom.xml /app
RUN mvn -f /app/pom.xml clean package -Dmaven.test.skip

FROM eclipse-temurin:17-jdk-alpine
EXPOSE 8080
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT [ "java", "-jar", "/app.jar" ]