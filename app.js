import express from "express";
import cors from "cors";
import sample from "./sample.json" assert { type: "json" };
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

// Serves a welcome message at the root route
app.get("/", (req, res) => {
    res.send("sample JSON API using express. use the /data endpoint to get the JSON with GET or POST requests.");
});

// Handle both GET and POST for the /data route
app.route("/data")
    .get((req, res) => {
        res.json(sample); 
    })
    .post((req, res) => {
        res.json(sample);
    });

// An endpoint that returns a random movie
app.get("/random-movie", (req, res) => {
    const randomIndex = Math.floor(Math.random() * sample.movies.length);
    res.json(sample.movies[randomIndex]);
})

// Allows users to search for movies by title, genre, director, or year.
// Add query parameters like /movies?title=Inception or /movies?genre=Action to filter the JSON data.
app.get("/movies", (req, res) => {
    const { title, genre, year } = req.query;
    let filteredMovies = sample.movies;
  
    if (title) {
      filteredMovies = filteredMovies.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
  
    if (genre) {
      filteredMovies = filteredMovies.filter(movie =>
        movie.genres.map(g => g.toLowerCase()).includes(genre.toLowerCase())
      );
    }
  
    if (year) {
      filteredMovies = filteredMovies.filter(movie => movie.releaseYear === parseInt(year));
    }
  
    res.json(filteredMovies);
  });
  

// error message for invalid requests, missing query parameters, or incorrect endpoints
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
