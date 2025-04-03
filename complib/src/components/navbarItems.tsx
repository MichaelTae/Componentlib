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
    <>
      {items.map((item: any) => {
        const isVisible = visibleItems[item.title] || false;
        return (
          <div key={item.title} className='border border-amber-300'>
            <button
              onClick={() => toggleVisibility(item.title)}
              className='border border-amber-600'
            >
              {item.title}
            </button>
            {isVisible &&
              item.items.map((subItem: any) => {
                return (
                  <div key={subItem.title} className='border border-amber-600'>
                    {subItem.title}
                  </div>
                );
              })}
          </div>
        );
      })}
    </>
  );
};
