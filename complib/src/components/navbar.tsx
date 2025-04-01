import { navbarItems } from './navbarItems';
import { navBarItemsData } from '../data/navbarItemData';
const Navbar = () => {
  return (
    <>
      <nav className='w-full flex justify-between shadow-md p-4'>
        <div className='flex flex-col  w-full h-full'>
          <div>LOGO</div>
          <div>Navbar</div>
          <div className='border border-amber-300'>
            {navbarItems(navBarItemsData)}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
