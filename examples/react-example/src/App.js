/*
   task: build a collection of recipes
*/

// to use other components / libraries, we need to import them
import Ingredients from './components/Ingredients';

// to use a .css file, we can also import it
import './App.css';


// React components are JS functions that return HTML / other components
// React component names should be capitalized
function App() {
    const ingredients_1 = [
	'some ramen noodles',
	'1 cup of water',
	'seasoning',
	'2 eggs'
    ];

    const ingredients_2 = [
	'scallions',
	'curry powder',
	'salt',
	'hot pepper'
    ];
    
    
    // note: for React, the class attribute must be named className instead
    return (
	<div className='recipe-parent'>
	    <Ingredients ingredients={ingredients_1} />
	    <Ingredients ingredients={ingredients_2} />
	</div>
    );
}

// this allows other components / files to use this component
export default App;