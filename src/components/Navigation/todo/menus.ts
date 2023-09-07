interface IMenuItem {
  name: string;
  url: string;
}

const menuItems: IMenuItem[] = [
  {
    name: 'Home',
    url: '/home'
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