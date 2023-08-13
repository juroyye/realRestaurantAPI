Wireframe:

Rotating circle of food images that revolve around the input bar. MAYBE.
There will be two inputs, city/location and restaurant type with keywords.
Fading words that phase in and out with names of food and cities.
When request to API and information is submitted, the photos of food will fade and the results will slowly fade in.

MVP:

1. Two inputs, LOCATION and RESTAURANT TYPE/ KEYWORDS. 
2. SUBMIT button.
3. Request to API call made.
4. Results displayed.

MUST USE FETCH AND USEEFFECT. 

First, I need to create the input boxes and submit buttons for my page.
Next, I need to center them on my page. (I styled them too.)
Next I need to put the placeholder lettering inside the submit containers.
I've begun implenting the location and restaurant list APIs and begun to make calls. 

https://clipchamp.com/watch/QQXSu4jTNpv

APIKEY: bae3154e6amsh9de0e73ebe298f8p1def95jsn1394f149f348


NOW, I must do a lineup of things. 


1. Get data to display in div container, with styling and scrollability. (ResultsBox)
2. Get forms to connect to data in terms of being able to search.
3. Get submit button to fade out landing box div and fade in search results.
4. 



Order of Languages - Amharic, Korean, Arabic



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
