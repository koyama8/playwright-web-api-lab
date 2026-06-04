const { test: base } = require('@playwright/test')

const { LoginingPage } = require('../pages/LoginPage.js')
const { Moviespage } = require('../pages/Moviespage.js')
const { Toast } = require('../pages/Components.js')

const test = base.extend({
    page: async ({page}, use) => {
        await use({
            ...page,
            login: new LoginingPage(page),
            movies: new Moviespage(page),
            toast: new Toast(page)
        })
    }
})

export { test}