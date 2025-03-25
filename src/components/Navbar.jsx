import React from 'react'

const Navbar = () => {
  return (
    <nav className=' border-2 flex justify-around fixed bottom-3 left-5 right-5 bg-amber-200 rounded-full'>
        <li className='list-none p-3'>Faculty</li>
        <li className='list-none p-3'>Question Paper</li>
        <li className='list-none p-3'>About</li>
    </nav>
  )
}

export default Navbar
