export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8883ed2b2652196fb12c00',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kh1g7i3y',
                  apiId: '5dfeb551-32c2-4657-8d59-12f9dbabe768'
                },
                {
                  buildHookId: '5f8883ee48d0f71a7341f762',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-v9r6xo6b',
                  apiId: '9c999ecc-9d7f-4a43-8d58-20e560ceb157'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hrishimittal/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-v9r6xo6b.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
