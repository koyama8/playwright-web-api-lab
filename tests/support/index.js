const { test: base, expect } = require('@playwright/test')

const { LoginingPage } = require('../pages/LoginPage.js')
const { Moviespage } = require('../pages/Moviespage.js')
const { Toast } = require('../pages/Components.js')

      //    login: new LoginingPage(page),
     //     movies: new Moviespage(page),
    //     toast: new Toast(page)

const test = base.extend({
    page: async ({page}, use) => {

        const context = page

        context['login'] = new LoginingPage(page) 
        context['movies'] = new Moviespage(page) 
        context['toast'] = new Toast(page)     

        await use(context)
    }
})

export { test }