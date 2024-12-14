import React from 'react'

const Simple = () => {
  return (
    <div>
        <>
        <div className="simple w-full py-32 bg-[url('https://www.shutterstock.com/image-illustration/dot-green-wave-light-screen-260nw-2272446207.jpg')] bg-cover flex flex-col items-center justify-center relative">
   <h1 className='text-5xl text-center text-white font-semibold mb-4'>Lets Discuss your Projects</h1>
   <h5 className='text-lg text-center text-gray-300   mb-6'>With a focus on excellence and results, we're ready to <br /> turn your ideas into reality. Share your project details below, and we’ll respond promptly to start the conversation.</h5>
   <button className="hover:bg-[#32C9DD] hover:text-black font-bold text-white px-4 py-2 rounded-full bg-[#082325] transition duration-300">
      <a href="#contact">Contact Us</a>
   </button>
</div>

        </>
    </div>
  )
}

export default Simple