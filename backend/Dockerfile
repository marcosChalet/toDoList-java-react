FROM maven:3.9.5-amazoncorretto-17 as builder

WORKDIR /usr/src/app
COPY api/pom.xml .
COPY api/src ./src
RUN mvn clean install -DskipTests


FROM openjdk:17-jdk-alpine

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/target/todoapp-0.0.1-SNAPSHOT.jar ./todoapp.jar

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "todoapp.jar" ]
