export const data = {
  "key": "v-2d0a87a8",
  "path": "/es/",
  "title": "Hola esto es en español",
  "lang": "es-ES",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "es/README.md",
  "git": {
    "updatedTime": 1626103650000,
    "contributors": [
      {
        "name": "Mario",
        "email": "mario.vitoon@gmail.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
