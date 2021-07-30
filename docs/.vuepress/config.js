module.exports = {
  head: [
      ['link', { rel: 'icon', href: '/images/ModMail_Icon.png' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:url', content: 'https://mail.phodit.xyz' }],
      ['meta', { property: 'og:site_name', content: 'ModMail' }],
      ['meta', { property: 'og:keywords', content: 'Discord,Mail,ModMail, mod mail, support, soporte, tickets, bot mail, bot soporte, ticket bot, Mod Mail' }],
      ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { property: 'og:image', content: '/images/ModMail_Banner.png' }],
      ['meta', { property: 'twitter:image', content: '/images/ModMail_Banner.png' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'ModMail',
      description: 'ModMail Documentation | ModMail enables private, secure and smooth communication between server members and the staff.',
      selectLanguageName: 'English'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'ModMail',
      description: 'ModMail Documentation | ModMail permite comunicación privada, segura y fluida entre los miembros del servidor y el staff.',
      selectLanguageName: 'Español'
    }
  },
  themeConfig: {
      logo: '/images/ModMail_Icon.png',
      locales: {
        '/': {
          // text for the language dropdown
          selectText: 'Languages',
          selectLanguageText: 'Languages',
          selectLanguageAriaLabel: 'Languages',
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
                link: 'https://discord.gg/aUNhdFD'
              },
              {
                text: 'Donations',
                link: 'https://paypal.me/mariiete1801'
              },
              {
                text: 'Buy Hosted Version',
                link: '/hosted_version.md'
              }
          ],
          sidebar: [
            {
              text: 'Introduction',
              link: '/README.md'
            },
            {
              text: 'Bot Demo',
              link: '/demo.md'
            },
            {
              text: 'Hosted Version',
              link: '/hosted_version.md'
            },
              {
              text: 'FAQ',
              link: '/faq.md'
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
            },
            {
              text: 'Other',
              children: [
                {
                  text: 'Contributors',
                  link: '/other/contributors.md'
                },
                {
                  text: 'Privacy Policy',
                  link: '/other/privacy_policy.md'
                }
              ]
            }
          ]
        },
        '/es/': {
          // text for the language dropdown
          selectText: 'Idiomas',
          selectLanguageText: 'Idiomas',
          selectLanguageAriaLabel: 'Idiomas',
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
                link: 'https://discord.gg/9jPjxMB'
              },
              {
                text: 'Donaciones',
                link: 'https://paypal.me/mariiete1801'
              },
              {
                text: 'Comprar la Versión Alojada',
                link: '/es/hosted_version.md'
              }
          ],
          sidebar: [
            {
              text: 'Introducción',
              link: '/es/README.md'
            },
            {
              text: 'Demostración del Bot',
              link: '/es/demo.md'
            },
            {
              text: 'Versión Hosteada',
              link: '/es/hosted_version.md'
            },
              {
              text: 'Preguntas Frecuentes',
              link: '/es/faq.md'
            },
            {
              text: 'Instalación',
              children: [
                {
                  text: 'Conseguir el Código del Bot',
                  link: '/es/installation/github.md'
                },
                {
                  text: 'Crear un Bot de Discord',
                  link: '/es/installation/discord.md'
                },
                {
                  text: 'Configurar la Base de Datos',
                  link: '/es/installation/mongo.md'
                },
                {
                  text: 'Alojar tu Visualizador de Registros',
                  link: '/es/installation/logs.md'
                },
                {
                  text: 'Alojar tu Bot',
                  children: [
                    {
                      text: 'Usando una VPS',
                      link: '/es/installation/vps.md'
                    },
                    {
                      text: 'Usando Heroku',
                      link: '/es/installation/heroku.md'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Comandos',
              children: [
                {
                  text: 'Introducción',
                  link: '/es/commands/README.md'
                },
                {
                  text: 'Configuración',
                  link: '/es/commands/configuration.md'
                },
                {
                  text: 'Conversación',
                  link: '/es/commands/conversation.md'
                },
                {
                  text: 'Públicos',
                  link: '/es/commands/public.md'
                }
              ]
            },
            {
              text: 'Otros',
              children: [
                {
                  text: 'Contribuidores',
                  link: '/es/other/contributors.md'
                },
                {
                  text: 'Política de Privacidad',
                  link: '/es/other/privacy_policy.md'
                }
              ]
            }
          ]
        }
      }
    }
}