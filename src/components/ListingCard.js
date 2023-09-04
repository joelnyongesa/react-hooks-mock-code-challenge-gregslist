import React, { useState } from "react";

function ListingCard({listing, onDelete}) {
  const [isFavorite, setIsFavorite] = useState(false)
  // To handle the favorite click
  function handleFavoriteItemClick(){
    setIsFavorite(!isFavorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        <button onClick={handleFavoriteItemClick} className={`emoji-button favorite ${isFavorite ? "active": ""}`}>★</button>
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={()=>onDelete(listing.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
