import React from 'react';

const Sun = () => {
  return (
    <div>

     
      <div className="yellow bg-[#4D3F53] w-full h-[42vh] flex items-center">
        <div className="left w-6/12 flex flex-col items-start justify-start ml-10 h-16 ">
          <h1 className="text-5xl text-white font-serif">Let's build a better future.</h1>
          <div className='w-fit px-2 py-0.5 mt-7 mb-10 '>
          <div className="masker rounded-full overflow-hidden inline-block">
  <a href="#" className="block bg-[#1F213E] text-white text-[26px] font-medium capitalize px-6 py-2 rounded-full">
    let's go
  </a>
</div>

          </div>
        </div>
        <div className="middle w-4/12">
          <h3 className='text-[19px] font-normal text-white -mt-12 '>Find out how Significo’s healthcare <br />
            technology expertise can take your digital <br />
            experience to the next level.
          </h3>
        </div>
        <div className="rightcircle w-3/12 flex items-center justify-center relative">
          <svg width="10%" height="10%" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031" stroke="black" strokeWidth="2"></path>
            <path d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031" stroke="black" strokeWidth="2"></path>
            <path d="M16 0.703125L16 37.2746" stroke="currentColor" strokeWidth="2"></path>
          </svg>
          <div className="circlemove rounded-full w-36 h-3 absolute text-white flex items-center justify-center slow-spin">
            <div className="cirtext text-[10px]">
              <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317c_ScrollUp.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sun;
