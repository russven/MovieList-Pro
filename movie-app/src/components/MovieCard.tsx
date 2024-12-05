import React from "react";
import Swal from "sweetalert2";
import { Movie } from "../types/Movie";

// Definir la interfaz para las props
interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageSrc = new URL(`../assets/img/${movie.image}`, import.meta.url).href;

  // Función para mostrar detalles usando SweetAlert2
  const showDetails = () => {
    Swal.fire({
      title: `<span style="color: #ffd700; font-size: 1.5rem;">${movie.title}</span>`,
      html: `<p style="color: #a0aec0; font-size: 1rem;">Género: <strong>${movie.gender}</strong></p>`,
      imageUrl: imageSrc,
      imageWidth: 300,
      imageHeight: 450, // Ajusta la altura para mantener la proporción de la carátula
      imageAlt: `${movie.title} Poster`,
      background: "#1a202c",
      confirmButtonColor: "#ffd700",
      confirmButtonText: "¡Genial!",
      customClass: {
        popup: "custom-swal-popup",
        confirmButton: "custom-swal-button",
      },
    });
  };

  return (
    <div className="movie-card" onClick={showDetails}>
      <img src={imageSrc} alt={movie.title} className="movie-image" />
      <h3>{movie.title}</h3>
      <p>{movie.gender}</p>
    </div>
  );
};

export default MovieCard;
