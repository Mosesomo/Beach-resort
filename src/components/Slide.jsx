import {useState} from 'react'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'

const data = [
    {
        url: 'https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg?auto=compress&cs=tinysrgb&w=600',
    },

    {
        url: 'https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=600',
    },

    {
        url: 'https://images.pexels.com/photos/3857215/pexels-photo-3857215.jpeg?auto=compress&cs=tinysrgb&w=600',
    },

    {
        url: 'https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        url: 'https://images.pexels.com/photos/17596964/pexels-photo-17596964/free-photo-of-picnic-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

const Slide = () => {
    const [slide, setSlide] = useState(0);

    let prevSlide = () => {
        setSlide(slide === data.length-1 ? 0 : slide + 1);
    };

    let nextSlide = () => {
        setSlide(slide === 0 ? data.length -1 : slide -1);
    };

  return (
    <div className='max-w-[1240px] mx-auto w-full flex justify-center items-center px-4 py-7 relative'>
        {/* left arrow */}
        <MdChevronLeft onClick={prevSlide} size={25} className='absolute top-[50%] left-[8%] lg:left-[15%] bg-gradient-to-l from-blue-400 to-blue-600 rounded p-1 cursor-pointer'/>
        <MdChevronRight onClick={nextSlide} className='absolute top-[50%] right-[8%] lg:right-[15%] bg-gradient-to-l from-blue-400 to-blue-600 cursor-pointer rounded p-1' size={25} />
      {data.map((item, index)=> (
        <div className={index === slide? 'opacity-100' : 'opacity-0'} key={index}>
            {index === slide && (
                <img src={item.url} alt="/" className='w-screen md:w-[960px] object-cover h-[400px] rounded' />
            )}
        </div>
      ))}
    </div>
  )
}

export default Slide
