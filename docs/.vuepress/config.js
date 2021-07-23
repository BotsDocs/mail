module.exports = {
  head: [
      ['link', { rel: 'icon', href: '/images/ModMail.png'}]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'ModMail',
      description: 'ModMail Discord bot documentation.',
      selectLanguageName: 'English'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'ModMail',
      description: 'Documentación del ModMail, un bot de Discord.',
      selectLanguageName: 'Español'
    }
  },
  themeConfig: {
      logo: '/images/ModMail.png',
      locales: {
        '/': {
          // text for the language dropdown
          selectText: 'Languages',
          selectLanguageName: 'English',
          // label for this locale in the language dropdown
          label: 'English',
          // Aria Label for locale in the dropdown
          ariaLabel: 'Languages',
          // text for the edit-on-github link
          editLinkText: 'Edit this page on GitHub',
          contributors: false,
          lastUpdated: false,
          // config for Service Worker
          serviceWorker: {
            updatePopup: {
              message: "New content is available.",
              buttonText: "Refresh"
            }
          },
          // algolia docsearch options for current locale
          algolia: {},
          navbar: [
              {
                text: 'Discord',
                link: 'https://discord.com'
              },
              {
                text: 'Donations',
                link: 'https://paypal.me/mariiete1801'
              }
          ],
          sidebar: [
            {
              text: 'Introduction',
              link: '/README.md'
            },
            {
              text: 'Installation',
              children: [
                {
                  text: 'Getting the Bot Code',
                  link: '/installation/github.md'
                },
                {
                  text: 'Creating a Discord Bot',
                  link: '/installation/discord.md'
                },
                {
                  text: 'Setting up the Database',
                  link: '/installation/mongo.md'
                },
                {
                  text: 'Hosting your Logs Viewer',
                  link: '/installation/logs.md'
                },
                {
                  text: 'Hosting your Bot',
                  children: [
                    {
                      text: 'Using a VPS',
                      link: '/installation/vps.md'
                    },
                    {
                      text: 'Using Heroku',
                      link: '/installation/heroku.md'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Commands',
              children: [
                {
                  text: 'Introduction',
                  link: '/commands/README.md'
                },
                {
                  text: 'Configuration',
                  link: '/commands/configuration.md'
                },
                {
                  text: 'Conversation',
                  link: '/commands/conversation.md'
                },
                {
                  text: 'Public',
                  link: '/commands/public.md'
                }
              ]
            }
          ]
        },
        '/es/': {
          // text for the language dropdown
          selectText: 'Idiomas',
          selectLanguageName: 'Español',
          // label for this locale in the language dropdown
          label: 'Español',
          // Aria Label for locale in the dropdown
          ariaLabel: 'Idiomas',
          // text for the edit-on-github link
          editLinkText: 'Edita esta página en GitHub',
          // config for Service Worker
          contributors: false,
          lastUpdated: false,
          tip: 'CONSEJO',
          warning: 'AVISO',
          danger: 'PELIGRO',
          notFound: ['No Encontrado'],
          backToHome: 'Vuelta al Inicio',
          openInNewWindow: 'abrir en una ventana nueva',
          serviceWorker: {
            updatePopup: {
              message: "Nuevo contenido disponible.",
              buttonText: "Recargar"
            }
          },
          // algolia docsearch options for current locale
          algolia: {},
          navbar: [
              {
                text: 'Discord',
                link: 'https://discord.com'
              },
              {
                text: 'Donaciones',
                link: 'https://paypal.me/mariiete1801'
              },
          ]
        }
      }
    }
}