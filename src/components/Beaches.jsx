import beach1 from '../assets/beach1.jpg'
import beach2 from '../assets/beach2.jpg'
import beach3 from '../assets/beach3.jpg'
import beach4 from '../assets/beach4.jpg'
import beach5 from '../assets/beach5.jpg'
import beach6 from '../assets/beach6.jpg'
import {FaHeart} from 'react-icons/fa'

const Beaches = () => {
  return (
    <div className='w-full flex justify-center items-center py-7 px-4 lg:px-24'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 w-full'>
        <div className='relative w-full h-full'>
            <img src={beach1} alt="" className="w-full h-[200px] object-cover" />
            <div className='absolute top-0 left-0 w-full h-[200px] bg-gradient-to-t from-black'></div>
            <div className='absolute bottom-0 left-0 w-full h-[200px text-white p-5 flex justify-between items-center'>
                <h4 className='font-serif font-bold text-xl'>Mombasa</h4>
                <FaHeart size={20} className='text-red-600' />
            </div>
        </div>
        <div className='relative w-full h-full'>
            <img src={beach2} alt="" className="w-full h-[200px] object-cover" />
            <div className='absolute top-0 left-0 w-full h-[200px] bg-gradient-to-t from-black'></div>
            <div className='absolute bottom-0 left-0 w-full h-[200px text-white p-5 flex justify-between items-center'>
                <h4 className='font-serif font-bold text-xl'>Lamu</h4>
                <FaHeart size={20} />
            </div>
        </div>
        <div className='relative w-full h-full'>
            <img src={beach3} alt="" className="w-full h-[200px] object-cover" />
            <div className='absolute top-0 left-0 w-full h-[200px] bg-gradient-to-t from-black'></div>
            <div className='absolute bottom-0 left-0 w-full h-[200px text-white p-5 flex justify-between items-center'>
                <h4 className='font-serif font-bold text-xl'>Kisumu</h4>
                <FaHeart size={20} />
            </div>
        </div>
        <div className='relative w-full h-full'>
            <img src={beach4} alt="" className="w-full h-[200px] object-cover" />
            <div className='absolute top-0 left-0 w-full h-[200px] bg-gradient-to-t from-black'></div>
            <div className='absolute bottom-0 left-0 w-full h-[200px text-white p-5 flex justify-between items-center'>
                <h4 className='font-serif font-bold text-xl'>Malindi</h4>
                <FaHeart size={20}  />
            </div>
        </div>
        <div className='relative w-full h-full'>
            <img src={beach5} alt="" className="w-full h-[200px] object-cover" />
            <div className='absolute top-0 left-0 w-full h-[200px] bg-gradient-to-t from-black'></div>
            <div className='absolute bottom-0 left-0 w-full h-[200px text-white p-5 flex justify-between items-center'>
                <h4 className='font-serif font-bold text-xl'>Kwale</h4>
                <FaHeart size={20} />
            </div>
        </div>
        <div className='relative w-full h-full'>
            <img src={beach6} alt="" className="w-full h-[200px] object-cover" />
            <div className='absolute top-0 left-0 w-full h-[200px] bg-gradient-to-t from-black'></div>
            <div className='absolute bottom-0 left-0 w-full h-[200px text-white p-5 flex justify-between items-center'>
                <h4 className='font-serif font-bold text-xl'>Dunga Beach</h4>
                <FaHeart size={20} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Beaches
