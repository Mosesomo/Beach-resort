import beach1 from '../assets/beach1.jpg'
import beach2 from '../assets/beach2.jpg'
import beach3 from '../assets/beach3.jpg'
import beach4 from '../assets/beach4.jpg'
import beach5 from '../assets/beach5.jpg'

const Resorts = () => {
  return (
    <div className='w-full py-14 p-4 md:px-24 flex flex-col justify-center items-center'>
      <h1 className='text-center text-3xl font-serif font-bold'>All Inclusive Resorts</h1>
      <h4 className='text-2xl font-serif font-bold text-gray-800 text-center mb-4'>On the Indian`s Ocean Best Beaches</h4>
      <div className='w-full grid md:grid-cols-2 gap-2'>
         <img className='w-full object-cover h-[300px] lg:h-[400px]' src={beach1} alt="" />
         <div className='w-full grid grid-cols-2 gap-2'>
            <img className='w-full object-cover h-[150px] lg:h-[200px]' src={beach3} alt="" />
            <img className='w-full object-cover h-[150px] lg:h-[200px]' src={beach2} alt="" />
            <img className='w-full object-cover h-[150px] lg:h-[200px]' src={beach4} alt="" />
            <img className='w-full object-cover h-[150px] lg:h-[200px]' src={beach5} alt="" />
         </div>
      </div>
    </div>
  )
}

export default Resorts
