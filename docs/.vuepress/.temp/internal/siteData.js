export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/images/ModMail.svg"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "ModMail",
      "description": "ModMail Discord bot documentation.",
      "selectLanguageName": "English"
    },
    "/es/": {
      "lang": "es-ES",
      "title": "ModMail",
      "description": "Documentación del ModMail, un bot de Discord.",
      "selectLanguageName": "Español"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
