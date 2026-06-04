const { test } = require('@playwright/test')

const { LoginingPage } = require('../pages/LoginPage.js')
const { Moviespage } = require('../pages/Moviespage.js')
const { Toast } = require('../pages/Components.js')

/** @type {import('../pages/Moviespage.js').Moviespage} */

let loginingPage
let moviespage
let toast

test.beforeEach(async ({ page }) => {
  loginingPage = new LoginingPage(page)
  toast = new Toast(page)
  moviespage = new Moviespage(page)
  await loginingPage.visit()
})
 
test('deve poder cadastrar um novo filme', async({page}) => {
    await loginingPage.submit('admin@zombieplus.com','pwd123')
    await moviespage.isLoggedIn()

    await moviespage.create('Nome do filme','Sinopse do filme', 'Fox Entertainment', '1972')
})