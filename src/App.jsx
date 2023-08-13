import './App.css'
import bgVideo from '../src/foodVid.mp4'
import React, { useEffect, useState } from 'react'
import './index.css'



function App() {

const [apiData, setApiData] = useState([]);


useEffect(() => { 
  // fetches the location data and console logs data
fetch('https://the-fork-the-spoon.p.rapidapi.com/locations/v2/list?google_place_id=ChIJu46S-ZZhLxMROG5lkwZ3D7k&geo_ref=false&geo_text=Roma%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy&geo_type=locality')
.then(response => response.json())
.then(data => {
  if (Array.isArray(data)) {
  setApiData(data);
} else {
  console.error('API response is not an array:', data);
}
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
    {apiData.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
</div>

    </>
  )
}



export default App;

