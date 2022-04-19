import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, description, posterURL, rating } = movie;
  return (
    <div style={{ margin: "0 auto" }}>
      <div className="card" style={{ width: "18rem" }}>
        <Link to={`/trailer/${id}`}>
          <img
            src={posterURL}
            style={{ cursor: "pointer" }}
            class="card-img-top"
            alt="hello"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Rating: {rating}/5</small>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
