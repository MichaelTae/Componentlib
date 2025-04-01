import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='grid grid-cols-2'>{children}</div>
    </>
  );
};

export default Container;
