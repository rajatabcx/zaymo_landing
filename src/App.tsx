import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';

const Home = lazy(() =>
  import('./pages/Home').then((module) => ({
    default: module.Home,
  }))
);
const Blogs = lazy(() =>
  import('./pages/Blogs').then((module) => ({
    default: module.Blogs,
  }))
);
const Error = lazy(() =>
  import('./pages/Error').then((module) => ({
    default: module.Error,
  }))
);
const ForgotPassword = lazy(() =>
  import('./pages/ForgotPassword').then((module) => ({
    default: module.ForgotPassword,
  }))
);
const PrivacyPolicy = lazy(() =>
  import('./pages/PrivacyPolicy').then((module) => ({
    default: module.PrivacyPolicy,
  }))
);
const Signup = lazy(() =>
  import('./pages/Signup').then((module) => ({
    default: module.Signup,
  }))
);
const Signin = lazy(() =>
  import('./pages/Signin').then((module) => ({
    default: module.Signin,
  }))
);

function App() {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes key={pathname}>
        <Route
          path='/'
          element={
            <Suspense
              fallback={
                <div className='flex h-screen w-full justify-center items-center'>
                  <h1 className='dahlia text-6xl text-white'>Loading</h1>
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/blogs'
          element={
            <Suspense
              fallback={
                <div className='flex h-screen w-full justify-center items-center'>
                  <h1 className='dahlia text-6xl text-white'>Loading</h1>
                </div>
              }
            >
              <Blogs />
            </Suspense>
          }
        />
        <Route
          path='/privacy-policy'
          element={
            <Suspense
              fallback={
                <div className='flex h-screen w-full justify-center items-center'>
                  <h1 className='dahlia text-6xl text-white'>Loading</h1>
                </div>
              }
            >
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path='/auth/signup'
          element={
            <Suspense
              fallback={
                <div className='flex h-screen w-full justify-center items-center'>
                  <h1 className='dahlia text-6xl text-white'>Loading</h1>
                </div>
              }
            >
              <Signup />
            </Suspense>
          }
        />
        <Route
          path='/auth/signin'
          element={
            <Suspense
              fallback={
                <div className='flex h-screen w-full justify-center items-center'>
                  <h1 className='dahlia text-6xl text-white'>Loading</h1>
                </div>
              }
            >
              <Signin />
            </Suspense>
          }
        />
        <Route
          path='/auth/forgot-password'
          element={
            <Suspense
              fallback={
                <div className='flex h-screen w-full justify-center items-center'>
                  <h1 className='dahlia text-6xl text-white'>Loading</h1>
                </div>
              }
            >
              <ForgotPassword />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense
              fallback={
                <div className='flex h-screen w-full justify-center items-center'>
                  <h1 className='dahlia text-6xl text-white'>Loading</h1>
                </div>
              }
            >
              <Error />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
