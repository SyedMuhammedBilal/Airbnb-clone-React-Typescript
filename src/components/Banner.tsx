import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './Banner.css'

const Banner: React.FC = () => {

  const [showSearch, setShowSearch] = useState<Boolean>(false)

  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <h1>SHOW DATE PICKER</h1>}
        <Button
          onClick={() => {setShowSearch(!showSearch)}}
          className='banner__searchButton'
          variant='outlined'
        >Search Dates
        </Button>
      </div>
      <div className='banner__info'>
        <h1>Get out stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button variant='outlined'>Explore Nearby</Button>
      </div>
    </div>
  )
};

export default Banner;
