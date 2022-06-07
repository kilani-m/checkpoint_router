import React from 'react'
import { useParams } from 'react-router';

const Details = ({Moviec}) => {

  let par = useParams();
  const donnee = Moviec.find((el) => el.Id == par.id);

  return (
    <div className="details">
      
      <iframe width="600" height="300" 
          src={donnee.Trailler}
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>

      </iframe>
        <h2>{donnee.Title}</h2>
        <h4>Description :</h4>
        <p>{donnee.Description}</p>
        
      </div>
    
  )
}

export default Details