import React from "react";
import { useState } from "react";

const AddMovie = ({handleAdd}) => {
  const [mov , setMov] = useState('')
  const [url , setUrl] = useState('')
  const [desc , setDesc] = useState('')
  const [rate , setRate] = useState('')


  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <form
        style={{
          width: "40vw",
          border: "2px solid #0B6EFD",
          padding: 20,
          margin: "30 0",
        }}
      >
        <div className="mb-3">
          <input
            placeholder="Title"
            type="text"
            className="form-control"
            id="title"
            value={mov}
            onChange={(e) => setMov(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label"></label>
          <input
            placeholder="Description"
            type="text"
            className="form-control"
            id="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="row g-3">
          <div className="col-sm-7">
            <input
              type="text"
              class="form-control"
              placeholder="PosterURL"
              id="posterURL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div class="col-sm">
            <input
              type="number"
              className="form-control"
              placeholder="Rating"
              id="rating"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => handleAdd({
            id: Date.now(),
            title: mov,
            description : desc,
            posterURL: url,
            rating: rate
          })}
          className="btn btn-primary"
          style={{ marginTop: 10 }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
