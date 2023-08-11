import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// const url = 'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=348156&pageSize=10&pageNumber=1';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bae3154e6amsh9de0e73ebe298f8p1def95jsn1394f149f348',
// 		'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// class ExampleComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { };
//   }

//   render() {
//     return (
//       <div>
//         <h1>This is a view created by a class component</h1>
//       </div>
//     );
//   }
// }