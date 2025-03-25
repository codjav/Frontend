import React from 'react'

const Maincontent = () => {
  return (
    <div className="w-screen border-2 bg-bid rounded-t-4xl">
        <div className=" h-50 border-2 mt-10 m-6 mb-1 bg-blue-400 ">Frequently searched</div>

        <div className="box23 flex">
        <div className="w-2/5 h-100 border-2 m-1 ml-6 bg-blue-400">Update Faculty</div>
        <div className="w-3/5 h-45 border-2 m-1 mr-6 bg-blue-400">Add new faculty</div>
        </div>

        <div className="flex">
        <div className="w-3/5 h-105 border-2 m-6 mr-1 mt-1 bg-blue-400">Faculty Review</div>
        <div className="w-2/5 h-45 border-2 m-6 ml-1 mt-1 bg-blue-400">List of all faculty</div>
        </div>
    </div>
  )
}

export default Maincontent
