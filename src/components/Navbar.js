import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
function Navbar() {
    const [nav,setNav] = useState(false)
    const links = [
        {id:'1', link:'home'},
        {id:'2', link:'about'},
        {id:'3', link:'portfolio'},
        {id:'4', link:'experience'},
        {id:'5', link:'contact'},  
]
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Soham</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link duration={500} smooth to="link">
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute left-0 top-0 bg-gradient-to-b from-black to-gray-800 w-full h-screen">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 font-medium text-gray-500 hover:scale-105 duration-200 text-4xl"
            >
              <Link duration={500} onClick={()=> setNav(!nav)} smooth to="link">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar