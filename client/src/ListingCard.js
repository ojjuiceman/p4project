import React, { useState } from "react";

function ListingCard({
  listing: { id, image, description, location },
  onRemoveListing,
}) {
  const [favorite, setFavorite] = useState(false);

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    onRemoveListing(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            โ
          </button>
        ) : (
          <button
            onClick={() => setFavorite(true)}
            className="emoji-button favorite"
          >
            โ
          </button>
        )}
        <strong>{description}</strong>
        <span> ยท {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          ๐
        </button>
      </div>
    </li>
  );
}

export default ListingCard;