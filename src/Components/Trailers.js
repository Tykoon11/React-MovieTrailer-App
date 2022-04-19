import React from "react";
import { useParams } from "react-router-dom";

function Trailers({ movies }) {
  const { id } = useParams();

  const data = movies.filter((movie) => {
    return movie.id === Number(id);
  });
  console.log(data);
  return (
    <div>
      {id && (
        <div style={{}}>
          <h1>{data[0].title}</h1>
          <iframe
            style={{ borderRadius: "20px" }}
            width="700"
            height="415"
            src={data[0].srcURL}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>{data[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Trailers;
