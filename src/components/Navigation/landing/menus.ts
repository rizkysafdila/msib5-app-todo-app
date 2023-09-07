interface IMenu {
  name: string
  url: string
  hasSubMenu?: boolean
}

const Menus: IMenu[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Products',
    url: '/',
    hasSubMenu: true,
  },
  {
    name: 'Categories',
    url: '/',
    hasSubMenu: true,
  }
]

export default Menus