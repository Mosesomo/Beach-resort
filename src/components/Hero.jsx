import { AiOutlineSearch } from 'react-icons/ai'
import beach from '../assets/bg.mp4'

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
       <video className='w-full h-full object-cover top-0 left-0' src={beach} autoPlay muted></video>
       <div className='absolute top-0 left-0 h-full bg-gradient-to-r from-black w-full'></div>
       <div className='w-full absolute top-0 flex flex-col h-full justify-center text-center p-4 text-white'>
        <h1 className='text-3xl font-serif font-bold'>First Class Travel</h1>
        <h2 className='text-xl font-serif font-bold py-3'>Top 1% Locations Nation Wide</h2>
        <form className='mx-auto max-w-[700px] border-[2px] p-1 flex justify-between items-center w-full bg-white rounded-md'>
            <div>
                <input className='text-gray-600 focus:outline-none' type="text" placeholder='search Destination' />
            </div>
            <div>
                <button className='bg-gradient-to-l from-blue-400 to-blue-600 p-1 rounded-md'>
                    <AiOutlineSearch size={25} />
                </button>
            </div>
        </form>
       </div>
    </div>
  )
}

export default Hero
