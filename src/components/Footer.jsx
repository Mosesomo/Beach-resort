import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="w-full p-9 bg-gray-300">
      <div className="lg:flex justify-between items-center ">
        <h1 className="text-4xl font-[italic] font-bold">RESORT<span className="text-blue-300">BCH.</span></h1>
        <div className="flex md:justify-center mt-4 items-center gap-7 text-purple-600">
            <FaInstagram size={20} className="cursor-pointer"/>
            <FaTwitter size={20} className="cursor-pointer"/>
            <FaFacebook size={20} className="cursor-pointer"/>
            <FaTiktok size={20} className="cursor-pointer"/>
        </div>
      </div>
      <div className="lg:flex justify-between items-center py-5">
        <div>
            <ul className="lg:flex py-3 justify-center items-center gap-5 font-serif font-semibold">
                <li>About</li>
                <li>Partnerships</li>
                <li>Careers</li>
                <li>NewsRoom</li>
                <li>Advertising</li>
            </ul>
        </div>
        <div>
            <ul className="lg:flex justify-center items-center gap-5 font-serif font-semibold">
                <li>Home</li>
                <li>Destination</li>
                <li>Travel</li>
                <li>Views</li>
                <li>Book</li>
            </ul>
        </div>
      </div>
      <p className="text-purple-400 font-bold">&copy; 2023 - All rights reserved. Created by Moses .O. Wamboga - 075817116/ 0777886326</p>
    </div>
  )
}

export default Footer
