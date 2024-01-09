import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Blogs } from './pages/Blogs';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Error } from './pages/Error';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { AnimatePresence } from 'framer-motion';

function App() {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes key={pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/signin' element={<Signin />} />
        <Route path='/auth/forgot-password' element={<ForgotPassword />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
