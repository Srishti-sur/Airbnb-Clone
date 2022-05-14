import './SearchResult.css';
import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarIcon from '@mui/icons-material/Star';



function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price, 
    total
}) {
  return (
    <div className='SearchResult'>
  <img src = {img} alt=""></img>
  
  <FavoriteBorderOutlinedIcon className='searchresult__heart'   />

  <div className='searchresult__info'>
      <div className='SearchResult__infoTop'>
<p>{location}</p>
<h3>{title}</h3>
<p>{description}</p>
      </div>
      <div className='SearchResult__infoBottom'>
<div className='searchResult__stars'>

<StarIcon className='searchResult__star'/>
<h3><strong>{star}</strong></h3>


</div>
<div className='searchresult__price'>
    <h2>{price}</h2>
    <h3>{total}</h3>
</div>
</div>

  </div>
    </div>


  )
}

export default SearchResult