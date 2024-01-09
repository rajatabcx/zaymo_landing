import { BlogCard } from '../components/BlogCard';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { StickyCursor } from '../components/StickyCursor';

export function Blogs() {
  return (
    <>
      <NavBar />
      <div className='w-full relative z-30 pt-2 mt-[102px] text-white'>
        <div className='max-w-[1220px] px-5 mx-auto'>
          <h1 className='dahlia text-6xl text-center mb-8'>All Blogs</h1>
          <div className='flex'>
            <BlogCard
              title='Gozney Increases Abandoned Cart Revenue 27% with Zaymo'
              description='Gozney increased abandoned cart revenue 27% in an A/B test with Zaymo, validating Zaymo’s mission to eliminate click-throughs from email marketing.'
              img='https://zaymo.com/assets/images/posts/gozney.jpeg'
            />
          </div>
        </div>
        <Footer />
      </div>
      <StickyCursor />
    </>
  );
}
