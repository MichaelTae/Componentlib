import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='grid grid-cols-[20%_80%] p-4 h-screen gap-1'>
        {children}
      </div>
    </>
  );
};

export default Container;
