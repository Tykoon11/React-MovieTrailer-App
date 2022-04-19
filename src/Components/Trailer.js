import React from "react";

const Trailer = ({  movie,key}) => {
    const {srcURL} = movie;

  return (
    <div>
        <iframe
            key={key}
            width="950"
            height="534"
            src={srcURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
  );
};

export default Trailer;

