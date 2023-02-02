export default {
  title: 'Interactive audiovisual design',
  description: 'An introduction to expert course on interactive audiovisual design.',
  themeConfig: {
    logo: '/Artevelde.svg',
    nav: [
      { text: 'Introduction', link: '/' },
      { text: 'P5.js', link: '/p5/' },
      {
        text: 'Resolume',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
      ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'linkedin', link: '...' },
      { icon: 'youtube', link: 'www.youtube.com/justjustcode' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Jannes Lambrecht'
    }
  }, 
  build: {
    outDir: '../../public'
  }
  
}
