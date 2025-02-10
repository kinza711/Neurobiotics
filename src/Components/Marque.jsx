import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiDotnet, SiTensorflow } from 'react-icons/si';

const IconMarquee = () => {
  return (
    <div className="icon-marquee overflow-hidden w-full bg-gray-100 py-4 ">
      <motion.div
        className="icon-container flex space-x-10 justify-around"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        {/* AI-related Icons */}
        <FaBrain className="text-6xl text-purple-500" />
        <SiTensorflow className="text-6xl text-orange-500" />
        <FaPython className="text-6xl text-blue-500" />
        
        {/* MERN stack Icons */}
        <FaReact className="text-6xl text-blue-600" />
        <FaNodeJs className="text-6xl text-green-600" />
        <SiMongodb className="text-6xl text-green-800" />

        {/* ASP.NET Icon */}
        <SiDotnet className="text-6xl text-blue-700" />
      </motion.div>
    </div>
  );
};

export default IconMarquee;

