import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function main() {




  // fetches the location data and console logs data
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


// fetches and consoles the restaurant list
// fetch('https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=348156&pageSize=10&pageNumber=1', {
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

  return (
    <>


    
    
    </>
  
  )
}
main();

export default main








