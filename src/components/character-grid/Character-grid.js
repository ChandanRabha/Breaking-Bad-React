import './character-grid.styles.css'
import {Character} from '../character/Character'


export const CharacterGrid= ({dataset}) => {

        return <div className='cards'>{(dataset.map(
            character=>(<Character key={character.char_id} character={character} />)
                   ))}</div>
    

}
