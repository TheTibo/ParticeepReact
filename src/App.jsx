import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { movies$ } from "./movies";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(4);

  const handleDelete = (id) => {
    const moviesToDelete = movieList.filter((movie) => movie.id !== id);
    setMovieList(moviesToDelete);
  };

  const handleCategoryChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  const filteredMovies =
    selectedCategories.length > 0
      ? movieList.filter((movie) => selectedCategories.includes(movie.category))
      : movieList;

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const totalCards = filteredMovies.length;
  const totalPages = Math.ceil(totalCards / cardPerPage);

  const start = (page - 1) * cardPerPage;
  const end = start + cardPerPage;
  const showCard = filteredMovies.slice(start, end);

  const handleItemsPerPageChange = (newCardPerPage) => {
    setCardPerPage(newCardPerPage);
    setPage(1);
  };

  useEffect(() => {
    movies$.then((movies) => {
      console.log("Movies receive from fetch:", movies);
      setMovieList(movies);
    });
  }, []);

  useEffect(() => {
    const allCategories = Array.from(
      new Set(movieList.map((movie) => movie.category))
    );
    setCategories(allCategories);
  }, [movieList]);

  return (
    <div className="app">
      <h1>Thibault Zhou x Particeep</h1>
      <Filter
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />

      <div className="movieList">
        {showCard.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={handleDelete} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        nextPage={nextPage}
        previousPage={previousPage}
        handleItemsPerPageChange={handleItemsPerPageChange}
        onClick={handleItemsPerPageChange}
      />
    </div>
  );
}

export default App;
