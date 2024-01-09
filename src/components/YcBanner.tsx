import { motion } from 'framer-motion';
import { useState } from 'react';

export function YcBanner() {
  const [show, setShow] = useState(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className={`flex fixed w-full bottom-0 z-[999999] bg-[#ffffff80] backdrop-blur-[15px] transition-all duration-300 ${
        show ? 'opacity-100' : '!opacity-0 !pointer-events-none'
      }`}
    >
      <div className='flex py-2 justify-center w-full relative'>
        <p>
          We've raised $1M to redefine retention marketing and are backed by Y
          Combinator.
        </p>
        <button
          className='underline px-2 font-semibold'
          onClick={() =>
            window.open('https://www.ycombinator.com/companies/zaymo')
          }
        >
          Read More
        </button>
        <button
          onClick={() => {
            setShow(false);
          }}
          className='absolute top-[50%] right-[12px] translate-y-[-50%] cursor-pointer'
        >
          X
        </button>
      </div>
    </motion.div>
  );
}
