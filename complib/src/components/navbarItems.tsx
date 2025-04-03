import { useState } from 'react';
import { NavbarItem } from '../data/interfaces';
export const navbarItems = (items: NavbarItem[]) => {
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const toggleVisibility = (title: string) => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };
  return (
    <div className='space-y-2'>
      {items.map((item) => {
        const isVisible = visibleItems[item.title] || false;
        return (
          <div
            key={item.title}
            className='border border-neon-blue rounded-lg shadow-sm bg-sky-950'
          >
            <button
              onClick={() => toggleVisibility(item.title)}
              className=' px-4 py-2 w-full text-left font-semibold text-gray-300 hover:text-gray-100 cursor-pointer  '
            >
              {item.title}
            </button>
            {isVisible && (
              <div className='p-4 my-2 ml-2 space-y-1.5 shadow-md border-l border-gray-600/50 rounded-lg'>
                {item.items.map((subItem) => (
                  <div
                    key={subItem.title}
                    className='text-gray-300 hover:text-gray-100 border-b border-gray-600 py-1 pl-2 cursor-pointer'
                  >
                    {subItem.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
