
import {useState} from 'react'

//importing required components
import {Pagination} from '../Pagination'
import {Pagination2} from '../Pagination2'
import {CharacterGrid} from '../character-grid/Character-grid'
import {EpisodeGrid} from '../episode-grid/Episode-grid'

import './grid.css'

export const Grid = ({characters ,episodes,filter}) => {

  //state variable for page number for character wise;
  const [currentPage, setCurrentPage] = useState(1);
    //state variable for page number for episode wise;
  const [currentPage2, setCurrentPage2] = useState(1);
  //total number of elements per page
  const [elementsPerPage] = useState(8);



/* ---Constrains for Pagination Character wise.---
   Here the indexes of the characters are calculated based on how many characters need to be shown per page.

   Eg: 6 characters should be shown per page and we are in page no 1 
         indexOfLastCharacter=>  currentPage * elementsPerPage => 1 * 6 = 6
         indexOfFirstCharacter=> indexOfLastCharacter - elementsPerPage => 6 - 6 = 0
         Since the index starts from 0. The number of characters that will render is from 0 to 6 which is 7 characters.

  */
  const indexOfLastCharacter = currentPage * elementsPerPage;
  const indexOfFirstCharacter= indexOfLastCharacter - elementsPerPage;

  //here we slice the data of the Characters state variable which was passed to the Grid component as a prop 
  //the slice is based on the index of the first character value and the index of the last character value calculated above.
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);




// Constrains for Pagination Episodic wise
  const indexOfLastEpisode = currentPage2 * 4;
  const indexOfFirstEpisode= indexOfLastEpisode - 4;
  const currentEpisodes= episodes.slice(indexOfFirstEpisode, indexOfLastEpisode);



//  Change page
//  paginate and paginate2 are functions which sets the page numbers of character wise data and episode wise data. 

  const paginate = pageNumber => setCurrentPage(pageNumber);
   const paginate2 = pageNumber => setCurrentPage2(pageNumber);

    //the state variable filter is checked
    // the value 1 means Character wise component should be rendered
    // else the Episode wise component should be rendered
    if(filter==='1')
              return ( 
                <div className='parent-container'>
                   <Pagination 
                          elementsPerPage={elementsPerPage}
                          totalElements={characters.length}
                          paginate={paginate}/>
                 <CharacterGrid dataset={currentCharacters} filter={filter}/>
                 
                 </div>
                      )
    else {    
        return (
              <div className='parent-container'>
                 <Pagination2 
                          elementsPerPage={elementsPerPage}
                          totalElements={episodes.length}
                          paginate={paginate2}
                          />
                <EpisodeGrid  dataset={currentEpisodes} filter={filter}/>
               
               </div>
        )
    }
}
