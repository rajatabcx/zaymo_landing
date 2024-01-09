import { ReactNode } from 'react';

interface PropTypes {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function PrimaryButton(props: PropTypes) {
  return (
    <button
      className={`h-16 min-w-16 rounded-full bg-[#A374FF] overflow-hidden px-16 py-8 flex justify-center items-center text-base font-medium whitespace-nowrap primary-button relative z-[2] text-black ${
        props.className || ''
      }`}
      onClick={props.onClick}
    >
      <span className='relative z-20'>{props.children}</span>
      <div className='bg-layers z-10'>
        <div className='layer layer-1 bg-[#FFD074] rounded-full absolute top-0 left-0 w-full h-full '></div>
        <div className='layer layer-2 bg-[#17F1D1] rounded-full absolute top-0 left-0 w-full h-full '></div>
        <div className='layer layer-3 bg-[#a374ff] rounded-full absolute top-0 left-0 w-full h-full '></div>
      </div>
    </button>
  );
}
