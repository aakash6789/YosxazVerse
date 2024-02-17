import React from 'react'
import SearchFilterToolbar from './SearchFilterToolbar.jsx'
const Home = () => {
  return (
    <div>
    <div className='relative h-full'>
        <h1 className='left-0 absolute'>Orders</h1>
        <button className='absolute right-0'>CREATE NEW</button>
    </div>
        <SearchFilterToolbar/>  
       
    </div>
  )
}

export default Home
