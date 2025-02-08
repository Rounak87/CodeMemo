import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center mt-5'>
    <div>
        <input type="text" 
        placeholder='Enter Title'
        className='border outline-none border-gray-400 py-2 pl-4 w-[200px] sm:w-[400px] mt-2 rounded-2xl'
        
        />

    </div>
    <button className='py-2 px-1 m-2  rounded-xl cursor-pointer border border-gray-600 lg:px-3 shadow-lg transition-all duration-200 bg-gray-700 hover:bg-gray-800' >Add To Memos</button>
    </div>
  )
}

export default Home