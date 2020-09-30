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
                  buildHookId: '5f74263a201e95351cab857c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xz3xaty8',
                  apiId: '7cc141b1-84ae-4316-9689-cc63778b17b6'
                },
                {
                  buildHookId: '5f74263a30d34f3724372baa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xv9o97v4',
                  apiId: '895ae28a-ef32-41ba-a209-ce2cfe0d67ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raj-s-jain/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xv9o97v4.netlify.app', category: 'apps'}
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
