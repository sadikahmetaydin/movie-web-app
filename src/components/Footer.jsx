import { FaInstagram, FaFacebook, FaYoutube  } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className='py-8 bg-gray-100'>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex mx-auto space-x-15 text-white text-xl">
          <a href="#">
            <FaFacebook className='text-blue-600 hover:text-blue-400 transition-colors text-2xl' />
          </a>

          <a href="#">
            <FaInstagram className='text-pink-600 hover:text-pink-400 transition-colors text-2xl' />
          </a>

          <a href="#">
            <FaXTwitter className='text-black hover:text-gray-400 transition-colors text-2xl' />
          </a>

          <a href="#">
            <FaYoutube className='text-red-600 hover:text-red-400 transition-colors text-2xl' />
          </a>
        </div>

      </div>

      <div className="flex justify-center mt-5 gap-10 text-sm">
        <a href="#" className='text-gray-500'>Privacy Policy</a>
        <a href="#" className='text-gray-500'>Terms of Service</a>
        <a href="#" className='text-gray-500'>Contact Us</a>
      </div>
    </footer>
  )
}

export default Footer