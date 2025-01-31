import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "stringplay",
  description: "Documentation for the stringplay app",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/introduction/overview' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/introduction/overview' },
          { text: 'Getting Started', link: '/introduction/getting-started' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cloudydaiyz/stringplay' }
    ]
  }
})
