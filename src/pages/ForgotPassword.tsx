import { useForm } from 'react-hook-form';
import { TextInput } from '../components/TextInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Logo } from '../components/Logo';
import { StickyCursor } from '../components/StickyCursor';
import { motion } from 'framer-motion';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Must be a valid email address')
    .required('Email is required'),
});

const defaultValues = {
  email: '',
};

export function ForgotPassword() {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = async (formData: any) => {
    console.log(formData);
  };

  return (
    <>
      <div className='flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-primary text-white relative z-30'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='flex justify-center'>
            <Logo />
          </div>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight'>
            Forgot Password
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, easings: ['easeIn'] }}
          className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
        >
          <div className='bg-[#313135] border border-[#5f5f66] py-8 px-4 sm:rounded-lg sm:px-10 shadow-md'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <TextInput
                  control={control}
                  name='email'
                  label='Email'
                  placeholder='Enter your email'
                />
              </div>

              <div className='flex justify-center mt-6'>
                <PrimaryButton className='!h-10 !py-6'>
                  Send Reset Link
                </PrimaryButton>
              </div>
              <div className='pt-6 mb-8 flex gap-2 justify-center'>
                <p
                  className='text-center text-theme cursor-pointer'
                  onClick={() => navigate(`/auth/signin`)}
                >
                  Return to Signin?
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      <StickyCursor />
    </>
  );
}
