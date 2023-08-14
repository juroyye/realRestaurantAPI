import './App.css'
import bgVideo from '../src/foodVid.mp4'
import React, { useEffect, useState } from 'react'
import './index.css'



function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState('');
  const [keywords, setKeywords] =useState('');

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
  }, [city, keywords]);

  
      // Fetch data from the API
// fetch('https://the-fork-the-spoon.p.rapidapi.com/locations/v2/list?google_place_id=ChIJu46S-ZZhLxMROG5lkwZ3D7k&geo_ref=false&geo_text=Roma%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy&geo_type=locality', {
//      "method": "GET",
//      "headers": {
//      'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com', 
//  		 'X-RapidAPI-Key': 'bae3154e6amsh9de0e73ebe298f8p1def95jsn1394f149f348',
// }
// })
// .then(response => response.json())
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.log(err);
// });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const cityValue = event.target.city.value;
  //   const keywordsValue = event.target.keywords.value;
  //   setCity(cityValue);
  //   setKeywords(keywordsValue);
  // }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleKeywordsChange = (event) => {
    setKeywords(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <>
    <video className='bgVid' autoPlay loop muted>
      <source src={bgVideo} type='video/mp4' />
    </video>
  
<form className='fields'>
   <h1 className='title'> ምግብ | 음식 | طعام </h1> 
     <input className='city' name='city' value={city} onChange={handleCityChange} placeholder='...city, location, etc.'></input>
     <input className='keywords' name='keywords' value={keywords} onChange={handleKeywordsChange} placeholder='...italian food, bakeries, etc.'></input>
     <button className='submit' onClick={handleFormSubmit}>Submit</button>
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
          <div key={restaurant.id}>{restaurant.name}</div>
          </ul>
          </div>
         
        ))}
      </ul>
</div>
    </>
  )
}


export default App;

