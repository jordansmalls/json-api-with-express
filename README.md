# Sample JSON API using Express.js

A simple API built with Express.js to provide developers with sample JSON data for testing and development purposes. Perfect for quick and easy access to JSON data without having to generate it yourself.

## Features

- **Root Endpoint (`/`)**: Provides a welcome message and basic usage instructions.
- **Get or Post JSON (`/data`)**: Returns the full sample JSON dataset via GET or POST requests.
- **Random Movie (`/random-movie`)**: Fetches a random movie from the dataset.
- **Search Movies (`/movies`)**: Filter movies by title, genre, or year using query parameters.
- **Error Handling**: Returns a JSON error message for invalid endpoints.


---

## Endpoints

### **`GET /`**
Returns a welcome message and basic usage instructions.

#### Example Response:
```text
sample JSON API using express. use the /data endpoint to get the JSON with GET or POST requests.
```

---

### **`GET /data` or `POST /data`**
Returns the full sample JSON dataset.

#### Example Response:
```json
{
  "movies": [
    {
      "title": "Inception",
      "director": "Christopher Nolan",
      "releaseYear": 2010,
      "genres": ["Action", "Sci-Fi"],
      "description": "A skilled thief is given a chance at redemption if he can successfully perform an inception."
    },
    ...
  ]
}
```

---

### **`GET /random-movie`**
Returns a random movie from the dataset.

#### Example Response:
```json
{
  "title": "The Matrix",
  "director": "The Wachowskis",
  "releaseYear": 1999,
  "genres": ["Action", "Sci-Fi"],
  "description": "A hacker discovers the true nature of reality and his role in the war against its controllers."
}
```

---

### **`GET /movies`**
Search for movies by title, genre, or release year using query parameters.

#### Query Parameters:
- **`title`**: Filter by movie title (e.g., `/movies?title=Inception`).
- **`genre`**: Filter by genre (e.g., `/movies?genre=Sci-Fi`).
- **`year`**: Filter by release year (e.g., `/movies?year=2010`).

#### Example Response:
```json
[
  {
    "title": "Inception",
    "director": "Christopher Nolan",
    "releaseYear": 2010,
    "genres": ["Action", "Sci-Fi"],
    "description": "A skilled thief is given a chance at redemption if he can successfully perform an inception."
  }
]
```

---

### **`GET /download-json`**
Download the full sample JSON data as a file.

---

## Setup and Usage

### Prerequisites:
- Node.js (v14 or later)

### Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/jordansmalls/sample-json-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sample-json-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Run the Server:
Start the API server on `http://localhost:8080` (or a specified port):
```bash
node app.js
# or
npm run dev
```

### Environment Variables:
- **`PORT`**: The port number the server listens to (default: `8080`).

---

## Optimizations

To improve the API's performance, scalability, and usability, consider the following optimizations:

1. **Caching Responses**:
   - Use a caching layer (e.g., Redis or in-memory caching) to store frequently requested data, such as the JSON dataset, reducing response times for repeat requests.

2. **Pagination for Large Datasets**:
   - Implement pagination on endpoints like `/movies` to handle larger JSON datasets efficiently. This minimizes the payload size and speeds up response times.

3. **Rate Limiting**:
   - Add rate limiting (using libraries like `express-rate-limit`) to prevent abuse or excessive API requests, ensuring fair usage (if hosted remotely).

4. **Environment-Specific Configuration**:
   - Use environment variables for settings like the JSON file path, port number, or API keys. This makes the API easier to configure across development, staging, and production environments.

5. **Compressed Responses**:
   - Enable Gzip compression (using middleware like `compression`) to reduce the size of JSON responses, improving data transfer speeds.

6. **Logging and Monitoring**:
   - Integrate logging (using tools like `morgan` or `winston`) to monitor API usage and debug issues effectively.

7. **Security Enhancements**:
   - Add headers like `Content-Security-Policy` or `Strict-Transport-Security` for better security.
   - Validate query parameters and request bodies to prevent injection attacks.

8. **Hosting Optimization**:
   - Deploy the API to a robust cloud provider like Vercel, AWS, or Heroku for improved uptime and global availability.

9. **Modular Structure**:
   - Refactor the API routes into separate files to improve maintainability as the project grows.

10. **API Documentation**:
    - Use tools like Swagger or Postman to generate detailed API documentation, making it easier for developers to integrate with the API.

---

## Contributing

Contributions are welcome! Feel free to fork this repository, make updates, and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
