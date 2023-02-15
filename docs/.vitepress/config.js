export default {
  title: 'Interactive audiovisual design',
  description: 'An introduction to expert course on interactive audiovisual design.',
  themeConfig: {
    logo: '/Artevelde.svg',
    nav: [
      { text: 'Introduction', link: '/' },
      { text: 'P5.js', 
      items: [
        { text: 'Introduction', link: '/p5/' },
        { text: 'Abstract', link: '/p5/abstract/' },
        { text: 'Audio', link: '/p5/audio/' },
        { text: 'Typography', link: '/p5/typography/' },
        { text: 'Video', link: '/p5/video/' }
      ]
    },
    // { text: 'Slides', 
    //   items: [
    //     { text: 'Introduction', link: '/reveal/slides/index.html' },
    //     // { text: 'Audio', link: '/p5/audio/' },
    //     // { text: 'Typography', link: '/p5/typography/' },
    //     // { text: 'Video', link: '/p5/video/' }
    //   ]
    // },
      // {
      //   text: 'Resolume',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // },
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
  // outDir: '../public',
  base: '/docs/'
}
