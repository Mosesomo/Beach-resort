import { AiOutlineBars, AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlineSearch, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import {useState} from 'react'

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className='w-full flex justify-between items-center p-5 absolute z-10 text-white'>
      <h1 className='w-full text-4xl font-bold font-[italic]'>BEACHES<span className='text-4xl font-extrabold text-blue-500'>.</span></h1>

      {/*laptoplinks*/}
      <div className='w-full'>
        <ul className='hidden lg:flex justify-center gap-6 font-serif font-semibold'>
            <li className='hover:text-gray-600 cursor-pointer hover:scale-105 duration-300'>Home</li>
            <li className='hover:text-gray-600 cursor-pointer hover:scale-105 duration-300'>Destination</li>
            <li className='hover:text-gray-600 cursor-pointer hover:scale-105 duration-300'>Travel</li>
            <li className='hover:text-gray-600 cursor-pointer hover:scale-105 duration-300'>Views</li>
            <li className='hover:text-gray-600 cursor-pointer hover:scale-105 duration-300'>Book</li>
        </ul>
      </div>
      <div className='w-full hidden lg:flex justify-end items-center gap-3'>
        <AiOutlineSearch size={25} className='font-bold cursor-pointer' />
        <button className='bg-gradient-to-l from-blue-400 to-blue-600 py-2 px-4 font-sans font-semibold rounded-md hover:scale-105 duration-300'>sign In</button>
      </div>

      {/*mobile links*/}
      {show && (
      <div className='lg:hidden absolute top-0 left-0 w-full h-[600px] bg-white z-100'>
          <AiOutlineClose onClick={() => setShow(false)} size={25} className='absolute right-1 cursor-pointer text-black top-1 font-bold'/>
          <h1 className='text-black py-3 px-2 font-serif font-bold shadow-md text-xl'>BEACHES.</h1>
        <ul className=' lg:flex justify-center gap-6 font-serif font-semibold text-black px-4 py-2'>
            <li onClick={() => setShow(false)} className='hover:text-gray-600 cursor-pointer hover:scale-105 duration-300 border-[2px] p-1 rounded mb-1'>Home</li>
            <li onClick={() => setShow(false)} className='hover:text-gray-600 cursor-pointer hover:scale-105 duration-300 border-[2px] p-1 rounded mb-2'>Destination</li>
            <li onClick={() => setShow(false)} className='hover:text-gray-600 cursor-pointer hover:scale-105 duration-300 border-[2px] p-1 rounded mb-2'>Travel</li>
            <li onClick={() => setShow(false)} className='hover:text-gray-600 cursor-pointer hover:scale-105 duration-300 border-[2px] p-1 rounded mb-2'>Views</li>
            <li onClick={() => setShow(false)} className='hover:text-gray-600 cursor-pointer hover:scale-105 duration-300 border-[2px] p-1 rounded'>Book</li>
        </ul>
        <div className='flex flex-col mt-4 lg:flex justify-end items-center gap-3 px-4'>
          <button onClick={() => setShow(false)} className=' w-full bg-gradient-to-l from-blue-400 to-blue-600 py-2 px-4 font-sans font-semibold rounded-md hover:scale-105 '>search</button>
          <button onClick={() => setShow(false)} className='w-full bg-gradient-to-l from-blue-400 to-blue-600 py-2 px-4 font-sans font-semibold rounded-md hover:scale-105 duration-300'>sign In</button>
          <div className='flex text-purple-500 justify-between items-center w-full py-3 px-10 bg-gray-300 '>
            <AiOutlineInstagram />
            <AiOutlineYoutube />
            <AiOutlineFacebook />
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
      )}
      <div className='lg:hidden bg-gray-400 text-white rounded p-1'>
        <AiOutlineBars onClick={() => setShow(true)} size={25} />
      </div>
    </div>
  )
}

export default Navbar
