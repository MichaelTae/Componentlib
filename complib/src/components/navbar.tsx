import { navbarItems } from './navbarItems';
import { navBarItemsData } from '../data/navbarItemData';
const Navbar = () => {
  return (
    <>
      <nav className='w-full flex justify-between shadow-md p-4  rounded-xl backdrop-blur-2xl bg-white/5 border border-neon-blue'>
        <div className='flex flex-col  w-full h-full'>
          <div>LOGO</div>
          <div>Navbar</div>
          <div>{navbarItems(navBarItemsData)}</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
