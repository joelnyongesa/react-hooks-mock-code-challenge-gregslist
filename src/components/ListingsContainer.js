import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchTerm }) {
  const [listings, setListings] = useState([])
  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(r=>r.json())
    .then(data => setListings(data))
    .catch(e=>console.log(e))
  }, [])

  function handleDelete(id){
    fetch(`http://localhost:6001/listings/${id}`,
    {
      method: 'DELETE',
    })
    .then(()=>{
      setListings(listings.filter((listing)=>listing.id !== id))
    })
  }
  const filteredResults = listings.filter((listing)=>(
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  ));
  console.log(filteredResults)


  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {filteredResults.map(listing=><ListingCard key={listing.id} listing={listing} onDelete={handleDelete}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
