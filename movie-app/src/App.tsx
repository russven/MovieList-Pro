import React, {useState} from 'react';
import "./App.css";
import MovieList from './components/MovieList';

const App: React.FC = () => {
  const [movies] = useState ([
    {
      id: 1,
      title: "Interestellar",
      gender: "Ciencia Ficción",
      image: "interestellar.jpeg",
    },
    {
      id: 2,
      title: "nobody", 
      gender: "Accion",
      image: "nobody.jpg",
    },
    {
      id: 3,
      title: "The notebook",
      gender: "Romance",
      image: "The notebook.jpg",
    },
    {
      id: 4,
      title: "Blade Runner 2049",
      gender: "Ciencia ficción",
      image: "blade-runner.jpg",
    },
    {
      id: 5,
      title: "Twilight",
      gender: "Romance",
      image: "twilight.jpg",
    },
    {
      id: 6,
      title: "Fractured",
      gender: "thriller",
      image: "Fractura.jpg",
    },
    {
      id: 7,
      title: "Shutter Island",
      gender: "Misterio",
      image: "Laisla.jpg",
    },
    {
      id: 8,
      title: "Contact",
      gender: "Ciencia ficción",
      image: "contact.jpg",
    },
    {
      id: 9,
      title: "Taxi Driver",
      gender: "Crimen",
      image: "Taxi.jpg",
    },
  ]);
  return(
    
    <div className="app-container">
      <h1 className= "app-title">🎬 Movie List</h1>
      <MovieList movies={movies} />
      <footer className="footer">
      <p>© 2024 Movie List - <a href="#">Contact Us</a> | <a href="#">Privacy Policy</a></p>
    </footer>
    </div>
    
  )


}

export default App;