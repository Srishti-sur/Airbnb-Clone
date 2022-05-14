import './SearchPage.css'
import React from 'react'
import {Button } from '@mui/material'
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className='searchPage'>

      <div className='searchPage__info'>

          <p>57 Stays - 25th May to 27th May - 2 Guests</p>
          <h1>Stays Nearby</h1>
        
          <Button variant="contained" >Type of Place</Button>
          <Button variant="contained">Rooms and Beds</Button>
          <Button variant="contained">Price</Button>
          <Button variant="contained">Amenities</Button>
          <Button variant="contained">Cancellation</Button>
      </div>
      <SearchResult
      img = "https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/01/03185218/Living-room-decor-ideas-from-House-Tour-of-Delhi-home-with-transitional-decor-style-Urbanclap-Homes.jpg"
      location=" Mayur Vihar, Delhi"
      title ="Modern Luxury at Roseate House"
      description= "Providing a modern setting, the Roseate House New Delhi is contemporary luxury hotel with 4 bedrooms, spa, home theatre, and terrace balcony."
      star={4.5}
      price="₹5200/Night"
      total ="₹10400"
      />

     

     
     
 <SearchResult
        img="https://exp.cdn-hotels.com/hotels/1000000/10000/3800/3793/e49353b1_y.jpg?impolicy=fcrop&w=500&h=333&q=high"
        location ="Dwarka, New Delhi"
        title ="Welcomhotel By ITC Hotels"
description= "Enjoy a relaxing stay at Dwarka, complete with a distinctive ambience, efficient services, and warm hospitality."
star={4.2}
price="₹4700/Night"
     total="₹9400" />
         
      <SearchResult
      img="https://www.bluesotelkrabi.com/wp-content/uploads/2018/03/Deluxe-Pool-Facing-03-840x550.jpeg"
      location = "Gurgaon, Sector 12"
      title="The Oberoi"
      description="The Oberoi Hotels and Resorts presents award winning 5 star hotels and luxury resorts in India."
      star={4.7}
      price="₹9500/Night" 
      total="₹19000"
      />
       <SearchResult 
          img ="https://stylesatlife.com/wp-content/uploads/2020/01/contemporary-bedroom-interior-design.jpg"
          location="Noida, Sector 16"
          title="Raddison Blu"
          description="The essence of Radisson Blu is reflected in every aspect of who we are and what we do. We provide unparalleled service, comfort and style."
          star = {4.6}
          price= "₹3500/Night"
          total = "₹7000"

      />

      <SearchResult
        img = "https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/wooden1605677554722.jpg"
        location="Vasant Kunj, Delhi"
          title="StayVista"
          description="Located inside a posh farm colony called Osho drive neighbouring the famous Isha Foundation which is known as a spiritual hub for yoga & meditation."
          star = {4.4}
          price= "₹4500/Night"
          total = "₹9000"
      />
      <SearchResult
         img = "https://i.pinimg.com/originals/ff/53/36/ff53360598dc4b34fa24b3d2cbd3c2bf.jpg"
        location="Connaught Place, Delhi"
          title="The Royal Plaza"
          description="Located in the heart of the capital city Connaught Place, New Delhi Hotel The Royal Plaza is close to several locations of interest including India Gate, Presidential Palace, etc."
          star = {4.2}
          price= "₹1500/Night"
          total = "₹3000"
      />
      </div>
     
  )
}

export default SearchPage