export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d753ad93586e6394e236e0b',
                  title: 'Sanity Studio',
                  name: 'mirco-kraenz-blog-studio',
                  apiId: '9396204f-c0a0-46e0-afda-54ce22d8d65d'
                },
                {
                  buildHookId: '5d753ad9c82dfb3bed4e9e11',
                  title: 'Blog Website',
                  name: 'mirco-kraenz-blog',
                  apiId: 'ee7b1e02-12d8-48ba-ad07-f6ab1639455c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/proSingularity/mirco-kraenz-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mirco-kraenz-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
