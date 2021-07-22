export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "Introduction",
  "lang": "en-US",
  "frontmatter": {
    "title": "Introduction",
    "next": "/installation/github.md"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "How does it work?",
      "slug": "how-does-it-work",
      "children": []
    }
  ],
  "filePathRelative": "en/README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
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
