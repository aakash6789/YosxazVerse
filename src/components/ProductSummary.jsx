import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DataComp from './DataComp.jsx';
const ProductSummary = () => {
    const components = Array.from({ length: 20 }, (v, i) => i);
  return (
    <div className='absolute w-4/5 mt-[18dvh] text-[0.7em] xs:text-[0.001em]'>
        <div className='flex'>
          <h1 className='ml-[2%] font-playfair text-[2xl] font-bold'>Product Summary</h1>
         
          <button className='ml-[8dvw]'>Show</button>
          <select id="coloumn" name="coloumn" className='w-[15%] ml-[35px] pl-[5px] font-playfair text-[3xl] font-bold ' >
    <option value="coloumn1">All Coloumn</option>
    <option value="coloumn1">coloumn1</option>
    <option value="coloumn2">coloumn2</option>
    <option value="coloumn3">coloumn3</option>
    <option value="coloumn4">coloumn4</option>
  </select>
  <button className='w-[15%]  ml-[3dvw] bg-[#4942E4] text-white rounded '>DISPATCH SELECTED</button>
  <div className='flex w-[20%] justify-between ml-[3dvw] '>
    <button><KeyboardArrowLeftIcon/></button>
  <button className='focus:bg-[#4942E4] focus:text-white focus:rounded p-2'>1</button>
  <button className='focus:bg-[#4942E4] focus:text-white focus:rounded p-2'>2</button>
  <button className='focus:bg-[#4942E4] focus:text-white focus:rounded p-2'>3</button>
  <p>....</p>
  <button>10</button>
  <button><KeyboardArrowRightIcon/></button>
  </div>
  </div>
       <div className='flex justify-between mt-[15px] text-[0.5em] md:text-[1em] w-full '>
        <input type='checkbox' className='ml-[2%]'></input>
        <p className='w-[7%] text-left'>ID</p>
        <div className='w-[5%]'>SHIPIFY#</div>
        <div className='w-[7%] text-left'>DATE</div>
        <div className='w-[5%] text-left' >STATUS</div>
        <div className='w-[7%] text-left'>CUSTOMER</div>
        <div className='w-[10%] text-left'>EMAIL</div>
        <div className='w-[8%]'>COUNTRY</div>
        <div className='w-[8%]'>SHIPPING</div>
        <div className='w-[5%]'>SOURCE</div>
        <div className='w-[7%] mr-[5%] text-left'>ORDER TYPE</div>
       </div>
       {components.map((index) => (
        <DataComp key={index} />
      ))}
      
    </div>
  )
}

export default ProductSummary


