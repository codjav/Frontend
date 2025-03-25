import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex justify-center mb-5 sticky top-3'>
      <input  type="text" className='h-13 border-2 bg-amber-200' placeholder='Search Faculty Here'/>
      <div className='w-13 h-13 border-2 ml-3'></div>
    </div>
  )
}

export default Searchbar
