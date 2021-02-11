import './episode.styles.css'
export const Episode = ({episode}) => {
    return (
        <div className='per-episode' > 
              <div className='episode-info'>
                  <div><b>Episode</b>:   {episode.episode}</div> 
                  <div><b>Title</b>:     <i>{episode.title}</i></div> 
                  <div><b>Season</b>:   {episode.season}</div> 
                  <div><b>Air Date</b>:  {episode.air_date}</div> 
              </div>
               <div className='parent-characters'>
                   <h5 className='character_title'>Characters</h5>
                  <div className='per-episode-characters'>       
                    {
                                episode.characters.map((character,index)=><h5 key={index}>{character}</h5>)
                    }
                    </div>
               </div>
        </div>
    )
}
