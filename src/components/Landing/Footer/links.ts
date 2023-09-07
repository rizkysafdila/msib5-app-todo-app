interface IFooterLink {
  title: string
  links: {
    label: string
    url: string
  }[]
}

const footerLinks: IFooterLink[] = [
  {
    title: 'Product',
    links: [
      {
        label: 'Overview',
        url: '#',
      },
      {
        label: 'Features',
        url: '#',
      },
      {
        label: 'Solutions',
        url: '#',
      },
      {
        label: 'Tutorial',
        url: '#',
      },
      {
        label: 'Pricing',
        url: '#',
      },
      {
        label: 'Releases',
        url: '#',
      }
    ]
  },
  {
    title: 'Company',
    links: [
      {
        label: 'About us',
        url: '#',
      },
      {
        label: 'Careers',
        url: '#',
      },
      {
        label: 'Press',
        url: '#',
      },
      {
        label: 'News',
        url: '#',
      },
      {
        label: 'Media kit',
        url: '#',
      },
      {
        label: 'Contact',
        url: '#',
      }
    ]
  },
  {
    title: 'Resources',
    links: [
      {
        label: 'Blog',
        url: '#',
      },
      {
        label: 'Newsletter',
        url: '#',
      },
      {
        label: 'Events',
        url: '#',
      },
      {
        label: 'Help centre',
        url: '#',
      },
      {
        label: 'Tutorials',
        url: '#',
      },
      {
        label: 'Support',
        url: '#',
      }
    ]
  },
  {
    title: 'Social',
    links: [
      {
        label: 'Twitter',
        url: '#',
      },
      {
        label: 'LinkedIn',
        url: '#',
      },
      {
        label: 'Facebook',
        url: '#',
      },
      {
        label: 'GitHub',
        url: '#',
      },
      {
        label: 'AngelList',
        url: '#',
      },
      {
        label: 'Dribbble',
        url: '#',
      }
    ]
  },
  {
    title: 'Legal',
    links: [
      {
        label: 'Terms',
        url: '#',
      },
      {
        label: 'Privacy',
        url: '#',
      },
      {
        label: 'Cookies',
        url: '#',
      },
      {
        label: 'Licenses',
        url: '#',
      },
      {
        label: 'Settings',
        url: '#',
      },
      {
        label: 'Contact',
        url: '#',
      }
    ]
  },
]

export default footerLinks