import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "stringplay",
  description: "Documentation for the stringplay app",
  lastUpdated: true,
  head: [["link", { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/introduction/overview' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/introduction/overview' },
          { text: 'Getting Started', link: '/introduction/getting-started' },
          { text: 'Troubleshooting', link: '/introduction/troubleshooting' },
        ]
      },
      {
        text: 'Your Troupe',
        items: [
          { text: 'Troupe', link: '/entities/troupe' },
          { text: 'Event Log', link: '/entities/event-log' },
          { text: 'Member Log', link: '/entities/member-log' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cloudydaiyz/stringplay' }
    ]
  }
})
