import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const SearchFilterToolbar = () => {
  return (
    <div className='mt-[8%] absolute flex justify-between w-4/5 text-[0.75em] '>
    <div className='relative w-[40%] pl-[2%]'>
      <h2 className='text-bold absolute'>What are you looking for?</h2>
      <input type='search' className='w-[100%] mt-[25px] mb-[8px]'></input>
    </div>
    <div className='relative w-[20%] flex-shrink-2'>
      <h2 className='text-bold absolute  '>Category</h2>
      
      <select id="category" name="category" className='mt-[25px] absolute left-0 w-[50%]' >
    <option value="category1">All</option>
    <option value="category1">category1</option>
    <option value="category2">category2</option>
    <option value="category3">category3</option>
    <option value="category4">category4</option>
  </select>
    </div>
    <div className='relative w-[20%] flex-shrink-2'>
      <h2 className='text-bold absolute '>Status</h2>
      <select id="status" name="status" className='mt-[25px] absolute left-0 w-[50%]'>
    <option value="status1">All</option>
    <option value="status1">status1</option>
    <option value="status2">status2</option>
    <option value="status3">status3</option>
    <option value="status4">status4</option>
  </select>
    </div>

    <button className='flex-shrink-2'>
     <KeyboardDoubleArrowDownIcon/>
    </button>
    <button className='mr-[2%] w-[10%] flex-shrink-2'>
     SEARCH
    </button>
    
  </div>
  )
}

export default SearchFilterToolbar
