import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className='flex bg-red-500 justify-center'>{children}</main>
    </>
  );
};

export default Layout;
