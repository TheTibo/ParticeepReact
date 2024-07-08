import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import { movies$ } from "./movies";

function App() {
  const [movieList, setMovieList] = useState([]);

  const handleDelete = (id) => {
    const moviesToDelete = movieList.filter((movie) => movie.id !== id);
    setMovieList(moviesToDelete);
  };

  useEffect(() => {
    movies$.then((movies) => {
      console.log("Movies receive from fetch:", movies);
      setMovieList(movies);
    });
  }, []);

  return (
    <div className="app">
      <div className="movieList">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
