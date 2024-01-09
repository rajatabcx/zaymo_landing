import Tilt from 'react-parallax-tilt';

interface PropTypes {
  title: string;
  description: string;
  img: string;
}

export function BlogCard(props: PropTypes) {
  return (
    <div className='sm:w-[400px] w-full rounded-2xl cursor-pointer'>
      <Tilt
        glareEnable
        glareColor='rgba(255,255,255,0.4)'
        scale={1}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        className='rounded-2xl overflow-hidden'
      >
        <div className='blog bg-[#313135] border border-[#5f5f66] p-5 rounded-2xl'>
          <div className='relative w-full h-[230px]'>
            <img
              src={props.img}
              alt={props.title}
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>
          <div className='mt-5'>
            <h1 className='text-white font-bold text-[24px]'>{props.title}</h1>
            <p className='mt-2 text-secondary text-[14px]'>
              {props.description}
            </p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            <p className='text-[14px] text-[#2f80ed]'>#Business</p>
            <p className='text-[14px] text-[#11998e]'>#Growth</p>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
