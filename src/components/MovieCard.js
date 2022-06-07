import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
function MovieCard({el,del}) {

  return (
	<div>
  <div className="top">
    <div className="columns">
      <div className="column is-full featured_wrapper p-0">
      <Link to={`/Details/${el.Id}`}>
        <img src={el.Poster} alt=""  className="featured" />
         </Link>
        <div className="title_wrapper">{el.Title}
        <p><Rating  ratingValue={el.Rate} readonly='true'/></p>

          <p><span className="has-text-white">{el.Description}</span></p>
          <button className="button is-medium" onClick={()=>del(el.Id)}>Delete</button>
        </div>
      </div>
    </div>
  </div>

      <div className="column is-full">
        <p className="has-text-white"></p>
      </div>
     

    </div>
  

  )
}
export default MovieCard