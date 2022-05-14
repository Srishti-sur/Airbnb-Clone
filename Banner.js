import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();
const [showSearch, setShowSearch] = useState(false);


return (


    <div className='banner'>
        <div className='banner__search'>
           

            <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                {showSearch ? "Hide" : "Search Dates"}
            </Button>
            {showSearch && <Search />}
        </div>
        <div className='banner__info'>
            <h1>Get out and stretch your imagination</h1>
            <h4>
                Plan a different kind of getaway to uncover the hidden gems near you.
            </h4>
            <Button onClick={()=> navigate('/Search')}  variant="contained"> Explore Nearby </Button>

            </div>
        </div>
    )
}
export default Banner
 