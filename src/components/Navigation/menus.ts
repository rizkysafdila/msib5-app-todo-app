interface MenuItem {
  name: string;
  url: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Todos',
    url: '/todos'
  },
  {
    name: 'About',
    url: '/about'
  },
];

export default menuItems;