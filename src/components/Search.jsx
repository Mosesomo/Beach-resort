import {BsHeadset} from 'react-icons/bs'
import {MdTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className='w-full lg:flex justify-between  py-4 p-4 lg:px-24'>
      <div className='w-full'>
        <h1 className='text-3xl font-serif font-bold mb-4'>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
        <p className='font-serif text-gray-700'>Come experience the pinnacle of luxury Indian ocean all inclusive
         vacation for couples at BEACHES Resorts. Our luxury beach resorts, set 
         along the most gorgeous tropical setting and exqiusite beaches in Mombasa, 
         Malindi, Lamu and kisumu.Unlimited features with gournment dining, unique bars
        serving premier liquores and wines and every land water spot including
        green golf resorts and also certified scuba diving. If you are planning a wedding,
        BEACHES resort is the leader in Indian ocean and honeymoon packages.</p>
        <div className='w-full py-6 flex justify-between lg:justify-start items-center gap-8'>
            <div className='lg:flex justify-center items-center gap-2'>
                <div className='bg-gradient-to-l from-blue-400 to-blue-600 p-2 rounded-md'>
                    <BsHeadset size={25}  />
                </div>
                <div className='text-center'>
                    <h2 className='font-sans font-bold'>LEADING SERVICE</h2>
                    <p className='font-sans font-semibold'>All inclusive company for 20</p>
                    <p className='font-sans font-semibold'>years in a row</p>
                </div>
            </div>
            <div className='lg:flex justify-center items-center gap-2'>
                <div className='bg-gradient-to-l from-blue-400 to-blue-600 p-2 rounded-md text-center'>
                    <MdTravelExplore size={25}  />
                </div>
                <div className='text-center'>
                    <h1 className='font-sans font-bold'>AUTOMATED BOOKINGS</h1>
                    <p className='font-sans font-semibold'>Book your vacation with ease.</p>
                    <h2 className='font-sans font-semibold'>BOOK NOW!</h2>
                </div>
            </div>
        </div>
      </div>
      <div className='w-full lg:w-[500px] lg:flex justify-end py-6 md:px-11'>
        <div className='mb-5'>
            <div className='border-[2px] border-gray-300 p-4 text-center rounded'>
                <h4 className='font-sans font-bold'>Get An Additional 10% Off</h4>
                <h4 className='font-sans font-bold'>10 Hours Left</h4>
                <button className='mt-4 bg-black text-gray-400 font-semibold p-2 w-full'>BOOK NOW AND SAVE</button>
            </div>
            <form action="">
                <div className='flex flex-col gap-1 py-3'>
                    <label className='text-black font-semibold'>Destination</label>
                    <select className='border-[2px] border-gray-300 rounded focus:outline-none text-gray-600'>
                        <option value="">Mombasa</option>
                        <option value="">Lamu</option>
                        <option value="">Kisumu</option>
                        <option value="">Malindi</option>
                        <option value="">Dunga Beach</option>
                        <option value="">Kilifi</option>
                    </select>
                </div>
                <div className='flex flex-col gap-1 pb-3'>
                    <label className='text-black font-semibold'>Check-In</label>
                    <input className='border-[2px] border-gray-300 rounded focus:outline-none text-gray-600' type='date'></input>
                </div>
                <div className='flex flex-col gap-1 pb-3'>
                    <label className='text-black font-semibold'>Check-Out</label>
                    <input className='border-[2px] border-gray-300 rounded focus:outline-none text-gray-600' type='date'></input>
                </div>
                <button className='bg-gradient-to-l from-blue-400 to-blue-600 p-3 w-full rounded'>Rates & Availabilities</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Search
