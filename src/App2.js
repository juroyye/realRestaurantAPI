import React, { useState } from "react";

const App2 = () => {
   const [movies, setMovies] = useState([

    {
    name:"Le Tournedos",
  servesCuisine:"Seafood",
  street:"Via Imperia, 7",
  postalCode:"20142",
  locality:"Milano",
  country:"Italy",
  mainPhotoSrc:"https://res.cloudinary.com/tf-lab/image/upload/restaurant/263ff9fc-4c9e-4b25-a9a5-4088c87a3a36/1d46184b-1305-4d3b-a980-afd2e27d4c71.jpg"
    }

   ]);
};

export default App2;