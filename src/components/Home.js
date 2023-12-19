import React from 'react'
import heroImage from './../assets/below3mb.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


function Home() {
  return (
    <div
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      name="home"
    >
      <div className="max-w-screen mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-4 mx-auto">
          <h2 className="text-4xl font-bold sm:text-7xl text-white">
            I'm a Front-end Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have a 3 years of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React JS, Tailwind.
          </p>
          <div className="">
            <Link to='portfolio' smooth duration={500} className="text-white w-fit px-6 py-3 my-2 rounded-md items-center flex bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="contents">
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl w-1/4 mx-auto md:w-1/4"
          />
        </div>
      </div>
    </div>
  );
}

export default Home