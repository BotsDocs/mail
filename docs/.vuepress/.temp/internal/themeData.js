export const themeData = {
  "logo": "/images/ModMail.svg",
  "locales": {
    "/": {
      "selectText": "Languages",
      "selectLanguageName": "English",
      "label": "English",
      "ariaLabel": "Languages",
      "editLinkText": "Edit this page on GitHub",
      "contributors": false,
      "lastUpdated": false,
      "serviceWorker": {
        "updatePopup": {
          "message": "New content is available.",
          "buttonText": "Refresh"
        }
      },
      "algolia": {},
      "navbar": [
        {
          "text": "Discord",
          "link": "https://discord.com"
        },
        {
          "text": "Donations",
          "link": "https://paypal.me/mariiete1801"
        }
      ],
      "sidebar": [
        {
          "text": "Introduction",
          "link": "/README.md"
        },
        {
          "text": "Installation",
          "children": [
            {
              "text": "Getting the Bot Code",
              "link": "/installation/github.md"
            },
            {
              "text": "Creating a Discord Bot",
              "link": "/installation/discord.md"
            },
            {
              "text": "Setting up the Database",
              "link": "/installation/mongo.md"
            },
            {
              "text": "Hosting your Logs Viewer",
              "link": "/installation/logs.md"
            },
            {
              "text": "Hosting your Bot",
              "children": [
                {
                  "text": "Using a VPS",
                  "link": "/installation/vps.md"
                },
                {
                  "text": "Using Heroku",
                  "link": "/installation/heroku.md"
                }
              ]
            }
          ]
        }
      ]
    },
    "/es/": {
      "selectText": "Idiomas",
      "selectLanguageName": "Español",
      "label": "Español",
      "ariaLabel": "Idiomas",
      "editLinkText": "Edita esta página en GitHub",
      "contributors": false,
      "lastUpdated": false,
      "tip": "CONSEJO",
      "warning": "AVISO",
      "danger": "PELIGRO",
      "notFound": [
        "No Encontrado"
      ],
      "backToHome": "Vuelta al Inicio",
      "openInNewWindow": "abrir en una ventana nueva",
      "serviceWorker": {
        "updatePopup": {
          "message": "Nuevo contenido disponible.",
          "buttonText": "Recargar"
        }
      },
      "algolia": {},
      "navbar": [
        {
          "text": "Discord",
          "link": "https://discord.com"
        },
        {
          "text": "Donaciones",
          "link": "https://paypal.me/mariiete1801"
        }
      ]
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
