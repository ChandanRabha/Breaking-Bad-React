import './Character.styles.css'

export const Character = ({character}) => {
  // console.log(character)
    return (
         <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={character.img} alt='' />
          <h5 className='card-text'>{character.name}</h5>
        </div>
        <div className='card-back'>
          <h1>{character.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {character.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {character.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {character.birthday}
            </li>
            <li>
              <strong>Status:</strong> {character.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}
