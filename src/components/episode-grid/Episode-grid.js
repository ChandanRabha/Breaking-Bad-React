import './episode-grid.styles.css'
import {Episode} from '../episode/Episode'


export const EpisodeGrid= ({dataset}) => 
    {
      return (<div className='episodes-grid' >
              {
               (dataset.map((episode)=>
                            (<Episode key={`${episode.episode_id}`} episode={episode} />)))}</div>)
    }

   

