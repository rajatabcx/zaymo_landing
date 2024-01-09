import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { PrimaryButton } from './PrimaryButton';

export function NavBar() {
  const navigate = useNavigate();

  return (
    <div className='fixed top-0 z-[9999] w-full h-[102px] py-6 px-[34px]'>
      <div className='flex w-full justify-between items-center'>
        <div className='logo'>
          <Logo />
        </div>
        <div className='routes flex bg-[#ffffff80] border border-[#ffffff33] backdrop-blur-[15px] rounded-[32px] gap-2'>
          <div
            className='flex items-center justify-center px-[28px] py-4 text-black text-lg hover:bg-[#000] hover:text-white hover:font-semibold cursor-pointer transition-all duration-300 rounded-[30px]'
            onClick={() => navigate('/blogs')}
          >
            Blog
          </div>
          <div
            className='flex items-center justify-center px-[28px] py-4 text-black text-lg hover:bg-[#000] hover:text-white hover:font-semibold cursor-pointer transition-all duration-300 rounded-[30px]'
            onClick={() => navigate('/privacy-policy')}
          >
            Privacy Policy
          </div>
          <div
            className='flex items-center justify-center px-[28px] py-4 text-black text-lg hover:bg-[#000] hover:text-white hover:font-semibold cursor-pointer transition-all duration-300 rounded-[30px]'
            onClick={() =>
              window.open('https://calendly.com/brice-douglas/30min')
            }
          >
            Book Demo
          </div>
        </div>
        <div className='login'>
          <PrimaryButton
            className='!h-10 !py-6'
            onClick={() => navigate('/auth/signin')}
          >
            Login
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
