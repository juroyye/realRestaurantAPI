import './App.css'
import bgVideo from '../src/foodVid.mp4'
import React, { useEffect, useState } from 'react'
import './index.css'



function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState('');
  const [keywords, setKeywords] =useState('');

  useEffect(() => {
    
    // Fetch the data from the api
    fetch('https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=348156&pageSize=10&pageNumber=1', {
      method: "GET",
      headers: {
        'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com',
        'X-RapidAPI-Key': '2d2684ee45msh1faa9ebe058e4bfp18456ajsnb9c1e5b8e468',
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
  }, [city, keywords]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const cityValue = event.target.city.value;
    const keywordsValue = event.target.keywords.value;
    setCity(cityValue);
    setKeywords(keywordsValue);
    setRestaurants([]);
  }

  // const handleCityChange = (event) => {
  //   setCity(event.target.value);
  // };
  // const handleKeywordsChange = (event) => {
  //   setKeywords(event.target.value);
  // };
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  // };


  return (
    <>
    <video className='bgVid' autoPlay loop muted>
      <source src={bgVideo} type='video/mp4' />
    </video>
  
<form className='fields'>
   <h1 className='title'> ምግብ | 음식 | طعام </h1> 
     <input className='city' name='city' value={city} onChange={(e) => setCity(e.target.value)} placeholder='...city, location, etc.'></input>
     <input className='keywords' name='keywords' value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder='...italian food, bakeries, etc.'></input>
     <button className='submit'>Submit</button>
     </form>
   

<div className='resultsBox'>
<ul>
        {restaurants.map((restaurant, index) => (
          <div className='restaurantBox'> 
          <ul key={index}>{restaurant.name}
          <p>Cuisine: {restaurant.servesCuisine}</p>
          <p>City: {restaurant.address.locality}</p>
          <p>Address: {restaurant.address.street}</p>
          <img width={400} src={restaurant.mainPhotoSrc} />
          </ul>
          </div>
         
        ))}
      </ul>
</div>
    </>
  )
}


export default App;

