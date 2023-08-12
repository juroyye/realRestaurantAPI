import './App.css'
import bgVideo from '../src/foodVid.mp4'
import React from 'react'
import './index.css'



function App() {



 // fetches the location data and console logs data
fetch('https://the-fork-the-spoon.p.rapidapi.com/locations/v2/list?google_place_id=ChIJu46S-ZZhLxMROG5lkwZ3D7k&geo_ref=false&geo_text=Roma%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy&geo_type=locality', {
     "method": "GET",
     "headers": {
     'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com', 
 		 'X-RapidAPI-Key': 'bae3154e6amsh9de0e73ebe298f8p1def95jsn1394f149f348',
}
})
.then(response => response.json())
.then(response => {
  console.log(response);
})
.catch(err => {
  console.log(err);
});


// fetches and consoles the restaurant list
fetch('https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=348156&pageSize=10&pageNumber=1', {
     "method": "GET",
     "headers": {
     'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com', 
 		 'X-RapidAPI-Key': 'bae3154e6amsh9de0e73ebe298f8p1def95jsn1394f149f348',
}
})
.then(response => response.json())
.then(response => {
  console.log(response);
})
.catch(err => {
  console.log(err);
});



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
    </>
  )
}





export default App;

