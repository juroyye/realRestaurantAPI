import './App.css'
import bgVideo from '../src/foodVid.mp4'
import React, { useEffect, useState } from 'react'
import './index.css'



function App() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    // Fetch data from the API
    fetch('https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=348156&pageSize=10&pageNumber=1', {
      method: "GET",
      headers: {
        'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com',
        'X-RapidAPI-Key': 'bae3154e6amsh9de0e73ebe298f8p1def95jsn1394f149f348',
      }
    })
    .then(response => {
      if (!response.ok) {
        throw Error(`error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setRestaurants(data.data); 
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <video className='bgVid' autoPlay loop muted>
      <source src={bgVideo} type='video/mp4' />
    </video>
  

    <h1 className='title'> ምግብ | 음식 | طعام</h1>
    <div className='fields'> 
     <input className='city' placeholder='...city, location, etc.'></input>
     <input className='keywords' placeholder='...italian food, bakeries, etc.'></input>
     </div>
     <button className='submit'>Submit</button>

<div className='resultsBox'>
<ul>
        {restaurants.map((restaurant, index) => (
          <div className='restaurantBox'> 
          <ul key={index}>{restaurant.name}
          <p>Cuisine: {restaurant.servesCuisine}</p>
          <p>City: {restaurant.address.locality}</p>
          <p>Address: {restaurant.address.street}</p>
          <img src='{restaurant.mainPhoto}'></img>
          </ul></div>
         
        ))}
      </ul>
</div>
    </>
  )
}


export default App;

