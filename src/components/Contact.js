import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 h-screen text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="" className="h-full flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent rounded-md text-white focus:outline-none border-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent rounded-md text-white focus:outline-none border-2 my-4"
            />
            <textarea
              rows={10}
              name="message"
              placeholder="Enter your message"
              className="p-2 bg-transparent rounded-md text-white focus:outline-none border-2"
            ></textarea>
            <button className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 rounded-md hover:scale-110 duration-300 text-white fkex items-center">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
