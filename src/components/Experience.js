import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

function Experience() {
    const links = [
        {id:1, src:html, title:'HTML', style:'shadow-orange-500'},
        {id:2, src:css, title:'CSS', style:'shadow-blue-500'},
        {id:3, src:javascript, title:'JAVASCRIPT', style:'shadow-yellow-500'},
        {id:4, src:reactImage, title:'REACTJS', style:'shadow-blue-500'},
        {id:5, src:tailwind, title:'TAILWIND', style:'shadow-sky-400'},
        {id:6, src:nextjs, title:'NEXTJS', style:'shadow-white'},
        {id:7, src:graphql, title:'GRAPHQL', style:'shadow-pink-400'},
        {id:8, src:github, title:'GITHUB', style:'shadow-gray-400'},
        
    ]
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black w-full h-screen' name='experience'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>This are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {links.map(({id, title,src,style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                    <img className='w-20 mx-auto' src={src} alt='' />
                    <p className={`mt-4`}>{title}</p>
                </div>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience