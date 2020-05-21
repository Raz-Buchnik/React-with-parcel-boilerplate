export default [
  {
    name: "Home",
    path: "/",
    async: (routeTo, routeFrom, resolve) => {
      import('/routes/Home').then(page => {
        resolve({
          component: page.default
        })
      })
    }
  },
  {
    name: "About",
    path: "/about",
    async: (routeTo, routeFrom, resolve) => {
      import('/routes/About').then(page => {
        resolve({
          component: page.default
        })
      })
    }
  },
  {
    name: "Page",
    path: "/page/:_id",
    async: (routeTo, routeFrom, resolve) => {
      import('/routes/Page').then(page => {
        resolve({
          component: page.default
        })
      })
    }
  }
]