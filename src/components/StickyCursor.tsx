import { useEffect, useRef, useState } from 'react';

export function StickyCursor() {
  const [cursorType, setCursorType] = useState('');

  const cursor = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const interactable = (e.target as Element)?.closest('.interactable');
    const interacting = interactable !== null;

    const x = e.clientX - (cursor.current?.offsetWidth || 0) / 2,
      y = e.clientY - (cursor.current?.offsetHeight || 0) / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`,
    };

    cursor.current?.animate(keyframes, {
      duration: 800,
      fill: 'forwards',
    });

    const currentCursorType = (interactable as HTMLElement)?.dataset
      ?.cursorType;

    if (interacting && currentCursorType && cursorType !== currentCursorType) {
      setCursorType(currentCursorType);
    } else if (!interacting) {
      setCursorType('');
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.addEventListener('mousemove', handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        id='cursor'
        ref={cursor}
        className='flex justify-center items-center relative'
      >
        <div className='blob bg-white h-[350px] aspect-square rounded-full absolute z-0 opacity-80'></div>
      </div>
      <div className='fixed top-0 h-screen w-full blur z-10'></div>
    </>
  );
}
