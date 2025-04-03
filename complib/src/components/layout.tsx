import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className='flex border border-neon-blue justify-center h-full rounded-xl backdrop-blur-2xl bg-white/5'>
        {children}
      </main>
    </>
  );
};

export default Layout;
