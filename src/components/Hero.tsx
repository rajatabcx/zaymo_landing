import { motion, useScroll } from 'framer-motion';
import { PrimaryButton } from './PrimaryButton';
import { Star } from './Star';
import { Tab } from './Tab';
import { YComb } from './YComb';
import { ParallaxText } from './ParallaxText';
import { Footer } from './Footer';
import { YcBanner } from './YcBanner';
import { useRef } from 'react';
import { TryOut } from './TryOut';

export function Hero() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: section1Ref,
    offset: ['start end', '400px end'],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: section2Ref,
    offset: ['start end', '400px end'],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: section3Ref,
    offset: ['300px end', '400px end'],
  });

  return (
    <div className='relative min-h-screen w-full'>
      <div className='w-full h-full absolute z-30'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='relative'>
            <div className='flex flex-col items-center'>
              <div className='flex justify-start w-full mb-4'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Tab>
                    Backed By <YComb />
                    Combinator
                  </Tab>
                </motion.div>
              </div>
              <div className='relative w-full'>
                <motion.h1
                  initial={{ x: 250, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className='w-full dahlia text-[120px] text-primary text-white text-left gradient-text -mt-5'
                >
                  Revolutionize
                </motion.h1>
                <div className='magic-star'>
                  <Star />
                </div>
                <div className='magic-star'>
                  <Star />
                </div>
                <div className='magic-star'>
                  <Star />
                </div>
                <div className='magic-star'>
                  <Star />
                </div>
              </div>

              <motion.h1
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className='w-full dahlia text-[120px] text-primary text-white text-left -mt-5'
              >
                Conversions with
              </motion.h1>

              <motion.h1
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className='w-full dahlia text-[120px] text-primary text-white text-left -mt-5'
              >
                Interactive Emails
              </motion.h1>
            </div>
            <div className='w-full flex items-center xl:justify-end mt-8 relative flex-col-reverse xl:flex-row'>
              <motion.div
                initial={{ x: -350, opacity: 0 }}
                animate={{ x: -250, opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                <PrimaryButton
                  className='xl:!absolute xl:top-[50%] xl:translate-y-[-50%]'
                  onClick={() =>
                    window.open('https://calendly.com/brice-douglas/30min')
                  }
                >
                  Book a Demo
                </PrimaryButton>
              </motion.div>
              <motion.p
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.45 }}
                className='text-lg max-w-[650px] xl:w-[390px] text-center xl:text-left mb-8 xl:mb-0 text-white'
              >
                Boost revenue with Zaymo's interactive emails. Remove friction,
                convert more customers.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 15 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className='absolute z-[29] top right-[20%] top-[10%] rounded-2xl overflow-hidden'
          >
            <img
              src='https://zaymo.com/build/_assets/lava-lamp-yellow-RTZ2QY22.png'
              alt='lamp'
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: 15 }}
            animate={{ scale: 1, rotate: -15 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className='absolute z-[29] left-[6.2%] top-[55%] rounded-2xl overflow-hidden'
          >
            <img
              src='https://zaymo.com/build/_assets/lava-lamp-blue-QTFZGDYQ.png'
              alt='lamp'
            />
          </motion.div>
        </div>

        <div className='py-8'>
          <h1 className='dahlia text-[80px] text-primary text-white text-center mb-8'>
            Trusted By
          </h1>
          <ParallaxText
            baseVelocity={-5}
            text1='— PATTERN — AURIA — CLUB. — HOHM'
            text2='— PATTERN — AURIA — CLUB. — HOHM'
          />
          <ParallaxText
            baseVelocity={5}
            text1='— ODESSY — TRIA — PATTERN. — AURIA'
            text2='— ODESSY — TRIA — PATTERN. — AURIA'
          />
        </div>
        <div className='py-8'>
          <h1 className='text-[60px] dahlia text-center text-white'>
            Powerful interactive components
          </h1>
          <div className='flex flex-nowrap justify-center gap-4'>
            <div className='left w-[50%] text-white'>
              <div
                ref={section1Ref}
                className='h-screen w-full flex flex-col justify-start pt-[150px] px-16'
              >
                <h1 className='text-[48px] font-bold'>
                  Intelligent Email Shopping Aligning with Your Needs
                </h1>
                <p className='text-xl'>
                  Upgrade your strategy, maximize revenue from abandoned carts,
                  email newsletters, and drip campaigns with our powerful
                  solutions and insights.
                </p>
              </div>
              <div
                ref={section2Ref}
                className='h-screen w-full flex flex-col justify-start pt-[150px] px-16'
              >
                <h1 className='text-[48px] font-bold'>
                  Capture Reviews, Enhance user Experience
                </h1>
                <p className='text-xl'>
                  Amplify Reviews: Leverage Zaymo's Embedded Review Solution to
                  Capture 3x More Feedback and Enhance Your Email Channel
                  Impact.
                </p>
              </div>
              <div
                ref={section3Ref}
                className='h-screen w-full flex flex-col justify-start pt-[150px] px-16'
              >
                <h1 className='text-[48px] font-bold'>
                  Boost Engagement, Embedded Polls for Insights.
                </h1>
                <p className='text-xl'>
                  Amass 3x More Customer Data: Elevate Insights with Zaymo's
                  Embedded Polls and Surveys for In-Depth Understanding and
                  Analysis.
                </p>
              </div>
            </div>
            <div className='right w-[30%] sticky top-0 h-screen left-0'>
              <img
                src='https://zaymo.com/build/_assets/iphone-mockup-S4ASINSE.png'
                alt='mobile'
                className='w-full h-[90%] object-contain absolute top-[5%] z-40'
              />
              <motion.img
                src='https://zaymo.com/build/_assets/featureShopInEmail-XWQK3MDJ.gif'
                alt='demo1'
                className='w-full h-[86%] object-contain absolute top-[7.05%]'
                style={{ opacity: scrollYProgress1 }}
              />
              <motion.img
                src='https://zaymo.com/build/_assets/featureReview-P3N27LUJ.gif'
                alt='demo2'
                className='w-full h-[86%] object-contain absolute top-[7%]'
                style={{ opacity: scrollYProgress2 }}
              />
              <motion.img
                style={{ opacity: scrollYProgress3 }}
                src='https://zaymo.com/build/_assets/featurePoll-DM5SCN25.gif'
                alt='demo3'
                className='w-full h-[86%] object-contain absolute top-[7%]'
              />
            </div>
          </div>
        </div>
        <div className='py-8'>
          <TryOut />
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <YcBanner />
        </div>
      </div>
    </div>
  );
}
