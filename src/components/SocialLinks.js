import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsPersonLinesFill} from 'react-icons/bs'

function SocialLinks() {
    const links = [
      {
        id: 1,
        child: (
          <>
            LinkedIn <FaLinkedin size={30} />
          </>
        ),
        href:'https://linkedin.com',
        style:'rounded-tr-md'
      },
      {
        id: 2,
        child: (
          <>
            Git hub <FaGithub size={30} />
          </>
        ),
        href:'https://github.com/Sohamdev165/',
        style:'rounded-tr-md'
      },
      {
        id: 3,
        child: (
          <>
            Mail <HiOutlineMail size={30} />
          </>
        ),
        href:'mailto:sohamkothawade@gmail.com',
        style:'rounded-tr-md'
      },
      {
        id: 4,
        child: (
          <>
            Resume <BsPersonLinesFill size={30} />
          </>
        ),
        download:true,
        // href:'https://linkedin.com', //drop resume here
        style:'rounded-br-md'
      },
    ];
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map((link,id)=>(
        <li key={id} className='flex justify-between items-center h-14 w-40 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300'>
          <a href={link.href} download={true} target='_blank' rel='noreferrer' className='flex justify-between items-center text-white w-full'>
            {link.child}
          </a>
        </li>
        ))

        }
      </ul>
    </div>
  );
}

export default SocialLinks