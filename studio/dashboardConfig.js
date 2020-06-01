export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ed500b47ee67ee2e5bfdcfd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9qptqqkv',
                  apiId: 'acf955de-f7af-47fe-9ace-a8c7d3addd10'
                },
                {
                  buildHookId: '5ed500b487e8c744e63a82bd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1ocsi3ir',
                  apiId: '75303972-3eef-48ba-ab06-ca628969435a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/baran724/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1ocsi3ir.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
