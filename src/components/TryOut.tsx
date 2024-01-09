import { useForm } from 'react-hook-form';
import { TextInput } from './TextInput';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton } from './PrimaryButton';
import Tilt from 'react-parallax-tilt';

const schema = yup.object().shape({
  email: yup.string().trim().email(),
});

const defaultValues = {
  email: '',
};

export function TryOut() {
  const { control } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  return (
    <Tilt scale={1} tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} glareEnable={false}>
      <div className='max-w-[1220px] mx-auto'>
        <div className='tryout text-white p-14 rounded-2xl'>
          <h1 className='text-[48px] mb-4 font-semibold dahlia'>
            Experience the <span className='gradient-text dahlia'>FUTURE</span>{' '}
            in Your Email Inbox
          </h1>
          <p className='text-xl mb-8'>
            Join 100’s others & dive deep into the world of Zaymo with our
            exclusive newsletters
          </p>
          <form>
            <TextInput
              control={control}
              name='email'
              placeholder='Enter your Email'
            />
            <PrimaryButton className='h-8 !py-6 px-8 mt-6'>
              Send me a Shoppable email
            </PrimaryButton>
          </form>
        </div>
      </div>
    </Tilt>
  );
}
