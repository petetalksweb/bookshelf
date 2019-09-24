// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Pete Can Read',
  siteDescription: 'A simple blog designed with Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/reviews/**/*.md',
        typeName: 'Review',
        route: '/reviews/:slug',
        refs: {
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          }
        }
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}
