import "./styles.css";
import React from "react";
import { useState } from "react";

const movieDB = {
  crime: [
    {
      name: "The Shawshank Redemption",
      rating: "5/5"
    },
    {
      name: "The Departed",
      rating: "4.5/5"
    }
  ],
  thriller: [
    {
      name: "Shutter Island",
      rating: "4.5/5"
    },
    {
      name: "A Quiet Place",
      rating: "4/5"
    }
  ],
  fiction: [
    {
      name: "Inception",
      rating: "4/5"
    },
    {
      name: "Interstellar",
      rating: "4.5/5"
    }
  ],
  action: [
    {
      name: "Captain America The Winter Soldier",
      rating: "5/5"
    },
    {
      name: "John Wick",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("crime");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 🎬 goodmovies </h1>
      <p className="description">
        {" "}
        Checkout my favourite movies. Select a genre to get started!
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            className="genreSelect"
          >
            {genre}
          </button>
        ))}
      </div>

      <hr />

      <div className="movies">
        <ul className="movieList">
          {movieDB[selectedGenre].map((movie) => (
            <li className="listItem" key={movie.name}>
              <div className="movieName"> {movie.name} </div>
              <div className="movieRating"> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>

      <footer>
        Created by{" "}
        <a
          href="https://kumarashutosh.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ashutosh Kumar
        </a>
      </footer>
    </div>
  );
}
