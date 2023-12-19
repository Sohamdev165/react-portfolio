import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-lg mx-auto flex flex-col justify-center w-full h-full p-4'>
        <div className='pb-8 '>
          <p className='inline text-4xl font-bold border-b-4 border-gray-500'>About</p>
        </div>
        <p className='mt-20 text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          suscipit sed ex ut efficitur. Ut luctus consectetur sapien. Sed
          lobortis at quam viverra fermentum. Nunc pretium porta imperdiet.
          Phasellus eget consequat mi. Vivamus tempor ut leo id molestie. In
          quis risus in dui dignissim auctor ut in tortor. Mauris aliquam.
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          suscipit sed ex ut efficitur. Ut luctus consectetur sapien. Sed
          lobortis at quam viverra fermentum. Nunc pretium porta imperdiet.
          Phasellus eget consequat mi. Vivamus tempor ut leo id molestie. In
          quis risus in dui dignissim auctor ut in tortor. Mauris aliquam.
        </p>
      </div>
    </div>
  );
}

export default About