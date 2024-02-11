export default {
  title: 'Interactive audiovisual design',
  description: 'An introduction to expert course on interactive audiovisual design.',
  themeConfig: {
    logo: '/Artevelde.svg',
    nav: [
      { text: 'Introduction', link: '/' },
      { text: 'After Effects', 
      items: [
        { text: 'Overview', link: '/after-effects/' },
        // { text: 'Interface and keyframes', link: '/after-effects/interface/' },
        { text: 'Introduction', 
          items: [
            { text: 'Interface', link: '/after-effects/interface/' },
            { text: 'Racing Ball', link: '/after-effects/interface/racing-ball.md' },
            { text: 'Bouncing Ball', link: '/after-effects/interface/bouncing-ball.md' },
            { text: 'DVD Screensaver', link: '/after-effects/interface/dvd-screensaver.md' },
          ]
       },
        // { text: 'Importing assets', link: '/after-effects/assets/' },
        // { text: '3D tracking', link: '/after-effects/3D tracking/' },
        // { text: 'Compositing', link: '/after-effects/compositing/' },
        // { text: 'Audio', link: '/after-effects/audio/' },
        // { text: 'Scripting', link: '/after-effects/scripting/' },
        // { text: 'Video', link: '/after-effects/video/' }
      ]
     },
      { text: 'P5.js', 
      items: [
        { text: 'Introduction', link: '/p5/' },
        { text: 'Abstract', link: '/p5/abstract/' },
        { text: 'Audio', link: '/p5/audio/' },
        { text: 'Typography', link: '/p5/typography/' },
        { text: 'Video', link: '/p5/video/' }
      ]
    },
    { text: 'Slides', 
    link: '/slides/' 
      // items: [
      //   { text: 'Introduction', link: '/slides/' },
      //   // { text: 'Audio', link: '/p5/audio/' },
      //   // { text: 'Typography', link: '/p5/typography/' },
      //   // { text: 'Video', link: '/p5/video/' }
      // ]
    },
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
