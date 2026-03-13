API Testing
You can run the project application on your laptop/PC by having Docker (already installed on your machine! if not, click here) and execute the following CLI command

docker run -d --rm --name qa-practice-api -p8887:8081 rvancea/qa-practice-api:latest
After successfully running the above command, you can open the application in browser by accessing the following URL

http://localhost:8887/swagger-ui.html
The above REST API application includes an OpenAPI (Swagger) Documentation with the following endpoints