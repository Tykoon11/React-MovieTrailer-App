import "./App.css";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import Header from "./Components/Header";
import AddMovie from "./Components/AddMovie";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Trailers from "./Components/Trailers";
//push check


function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Iron-man 3",
      description:
        "Tony Stark encounters a formidable foe called the Mandarin. After failing to defeat his enemy, Tony embarks on a journey of self-discovery as he fights against the powerful Mandarin.",
      posterURL: "../images/ironman.jpg",
      rating: 4,
      srcURL: "https://www.youtube.com/embed/Ke1Y3P9D0Bc"
    },
    {
      id: 2,
      title: "Creed 2",
      description:
        "In 1985, Ivan Drago killed Apollo Creed in a tragic boxing match. Under the guidance of Rocky, Apollo's son confronts Drago's son in an ultimate showdown.",
      posterURL: "../images/creed-2-poster.jpeg",
      rating: 3,
      srcURL: "https://www.youtube.com/embed/u22BXhMu4tI"
    },
    {
      id: 3,
      title: "Robin Hood",
      description:
        "Lord Robin of Loxley seeks vengeance after he returns from the Third Crusade to find that the corrupt Sheriff of Nottingham has declared him dead and claimed all his property.",
      posterURL: "../images/robinhood.jpeg",
      rating: 5,
      srcURL: "https://www.youtube.com/embed/zwPn9ZnbCo0"
    },
    {
      id: 4,
      title: "Robots",
      description:
        "Rodney, a genius inventor, wants to meet his inspiration, Bigweld, who is a master inventor. In order to do so, he travels to the city and finds himself dealing with a corporate honcho.",
      posterURL: "../images/robots.jpeg",
      rating: 5,
      srcURL: "https://www.youtube.com/embed/p9X16KPOgFI"
    },
    {
      id: 5,
      title: "Spider man",
      description:
        "Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He finds himself facing the Green Goblin, an evil maniac.",
      posterURL: "../images/spidey.jpeg",
      rating: 4,
      srcURL: "https://www.youtube.com/embed/Nt9L1jCKGnE"
    },
    {
      id: 6,
      title: "King kong",
      description:
        "King Kong and Godzilla go head-to-head in an epic battle of the beast when the giant gorilla escapes from captivity in Japan and squares up to the recently thawed lizard.",
      posterURL: "../images/kong.jpg",
      rating: 3,
      srcURL: "https://www.youtube.com/embed/odM92ap8_c0"
    },
  ]);

  const [addMovie, setAddMovie] = useState(false);

  const handleChange = () => {
    setAddMovie(!addMovie);
  };

  const handleSearch = (e) => {
    setMovies(
      movies.filter(
        (movie) => movie.rating >= e || movie.title.match(new RegExp(e, "i"))
      )
    );
  };

  const handleAdd = (e) => {
    setMovies([...movies, e]);
  };
  return (
    <div className="App" style={{ backgroundColor: "#77ACF0" }}>
      <Header handleChange={handleChange} handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={
            <div>
              {addMovie ? <AddMovie handleAdd={handleAdd} /> : null}
              <MovieList movies={movies} /> 
            </div>
          }
        />
        <Route exact path="/trailer/:id" element={<Trailers movies={movies} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
