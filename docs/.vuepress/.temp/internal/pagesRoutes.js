import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Introduction",["/index.html","/README.md"]],
  ["v-2d0a87a8","/es/","Hola esto es en español",["/es/index.html","/es/README.md"]],
  ["v-1a41c809","/installation/discord.html","Creating a Discord bot",["/installation/discord.md"]],
  ["v-385a267a","/installation/github.html","Getting the code",["/installation/github.md"]],
  ["v-8bb397ce","/installation/heroku.html","",["/installation/heroku.md"]],
  ["v-940555a4","/installation/logs.html","Hosting your Logs Viewer",["/installation/logs.md"]],
  ["v-73eeef7e","/installation/mongo.html","Setting up the Database",["/installation/mongo.md"]],
  ["v-22033b48","/installation/vps.html","Hosting on a VPS",["/installation/vps.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
