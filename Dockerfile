# Use an official OpenJDK runtime as a parent image
FROM maven:3.8.6-eclipse-temurin-17 AS build

# Set the working directory
WORKDIR /app

# Copy project files to the container
COPY . .

# Build the application inside the container
RUN mvn clean package -DskipTests

# Use a minimal Java image for running the app
FROM eclipse-temurin:17-jre

# Set the working directory in the container
WORKDIR /app

# Copy only the generated JAR file
COPY --from=build /app/target/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
