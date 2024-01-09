import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { useEffect, useRef } from 'react';

export function Footer() {
  const navigate = useNavigate();

  const path = useRef<SVGPathElement | null>(null);

  let progress = 0;
  let x = 0.7;
  let time = Math.PI / 2;
  let reqId: any = null;

  useEffect(() => {
    setPath(progress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setPath = (progress: any) => {
    const width = window.innerWidth;
    path.current?.setAttributeNS(
      null,
      'd',
      `M0 250 Q ${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x: any, y: any, a: any) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e: any) => {
    const { movementY, clientX } = e;
    const pathBound = path.current?.getBoundingClientRect();
    x = (clientX - pathBound!.left) / pathBound!.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className='mt-16 '>
      <div className='h-[1px] relative w-full mb-5'>
        <div
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseMove={(e) => {
            manageMouseMove(e);
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          className='h-10 w-full relative z-[30] hover:h-[200px] hover:top-[-82px] hover:cursor-none'
        ></div>
        <svg className='absolute h-[350px] w-full top-[-230px] pointer-events-none'>
          <path
            className='stroke-[2px] stroke-white fill-none'
            ref={path}
          ></path>
        </svg>
      </div>
      <div className='flex bg-[#1d1d1f] w-full justify-around items-center text-white py-12'>
        <div>
          <div>
            <Logo />
          </div>
          <p className='mt-2'>Interactivity that converts</p>
        </div>
        <div className='flex'>
          <div
            className='text-[#737373] hover:text-white px-2 cursor-pointer'
            onClick={() => navigate('/blogs')}
          >
            Blog
          </div>
          <div
            className='text-[#737373] hover:text-white border-l-[1px] border-r-[1px] border-white px-2 cursor-pointer'
            onClick={() => navigate('/privacy-policy')}
          >
            Privacy Policy
          </div>
          <div
            className='text-[#737373] hover:text-white px-2 cursor-pointer'
            onClick={() => navigate('/auth/signin')}
          >
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
}
