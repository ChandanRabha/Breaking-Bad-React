/*importing Hooks as need state variables for passing data 
And life cycle methods for fetching data from the API as soon as component renders */
import {useState,useEffect} from 'react';

//Grid component will have the contents of both character wise and episode wise respectively
import {Grid} from  './components/grid/Grid' 

//importing css file for styles
import './App.css';

function App() {
  //State Variable Declarations
  /*
  filterEpisode stores all the Episode returned from the API
  filterCharacter stores all the Character data returned from the API
  filter will store a 0 or 1 value where we use it to basically check if the user opted for viewing Character wise or Episode wise.
  */
  const [filterEpisode,funcEpisode]=useState([])  
  const [filterCharacter,funCharacter]=useState([])
  const  [filter,funFilter]=useState('1')

  
  //Hook Declartation
  //The hook below is called only for the first time the component is rendered
  useEffect(()=>
   { 
    //characters and episode data from the API are being fetched and stored to their respective state variables
    fetch(`https://www.breakingbadapi.com/api/episodes/`).then(response=>response.json()).then(data=>funcEpisode(data))
    fetch(`https://www.breakingbadapi.com/api/characters/`).then(response=>response.json()).then(data=>{funCharacter(data)
     })

  },[]   
  )
 

  return ( 
    <div className="container">
      <div className='filterBoxes'>
        <h1 className='headerText'>Breaking Bad API</h1>
        {/* Using a select tag to switch between Characters View and Episodes View */}
        {/* An onchange method is given where the current selected value is passed to the filter state variable. */}
         {/* The filter state variable is created and utilised so as to make the dom update on the changes when we switch from characters view to episodes view and vice versa */}
        <select onChange={(e)=>funFilter(e.target.value)} value={filter}><option value='1'>Characters</option><option value='2'>Episodes</option></select>
      </div>
      {/* In the Grid component we pass the characters and episodes state variables which was retrieved from the Breaking Bad API. */}
         {/* The filter state variable value is also passed so that the DOM gets the trigger that the component needs to be re-rendered*/}
      <Grid  characters={filterCharacter}   episodes={filterEpisode}   filter={filter}  />

    </div>
  );
}

//exporting the component
export default App;
