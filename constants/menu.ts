export interface NavItem {
  title: string;
  path: string;
}

export const nav: Array<NavItem> = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
];

export interface MenuItem {
  title: string;
  path: string;
}

export interface MenuSection {
  section: string;
  children: Array<MenuItem>;
}

export const menu: Array<MenuSection> = [
  {
    section: 'Overview',
    children: [
      {
        title: 'Introduction',
        path: '/',
      },
      {
        title: 'Getting started',
        path: '/getting-started',
      },
    ],
  },
  {
    section: 'Components',
    children: [
      {
        title: 'Accordion',
        path: '/components/accordion',
      },
      {
        title: 'Button',
        path: '/components/button',
      },
      {
        title: 'Table',
        path: '/components/table',
      },
      {
        title: 'Popover',
        path: '/components/popover',
      },
    ],
  },
];
