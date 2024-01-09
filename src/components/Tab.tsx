import { ReactNode } from 'react';

interface PropTypes {
  children: ReactNode;
}

export function Tab(props: PropTypes) {
  return (
    <div className='tab flex flex-nowrap font-medium px-4 py-2 rounded-full'>
      {props.children}
    </div>
  );
}
