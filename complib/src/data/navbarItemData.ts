interface NavBarItem {
  title: string;
  items: Array<{
    title: string;
    link: string;
  }>;
  created: boolean;
}

export const navBarItemsData: NavBarItem[] = [
  {
    title: 'Cards',
    created: true,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Buttons',
    created: true,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Forms',
    created: true,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Modals',
    created: true,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Tables',
    created: true,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Charts',
    created: false,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Icons',
    created: false,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Typography',
    created: false,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Notifications',
    created: false,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Tooltips',
    created: false,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Popovers',
    created: false,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Dropdowns',
    created: false,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
  {
    title: 'Accordions',
    created: false,
    items: [
      { title: 'item 1', link: '/item1' },
      { title: 'item 2', link: '/item2' },
      { title: 'item 3', link: '/item3' },
    ],
  },
];
