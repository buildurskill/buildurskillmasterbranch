# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file to the container
COPY target/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the JAR file when the container starts
ENTRYPOINT ["java", "-jar", "app.jar"]
