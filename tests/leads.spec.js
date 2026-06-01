// @ts-check
import { test, expect} from '@playwright/test';

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
  await page.goto('http://localhost:3000');

  //await page.click('//button[text()="Aperte o play... se tiver coragem"]')  
  await page.getByRole('button', {name: 'Aperte o play... se tiver coragem'}).click()

  //checkpoint verificar se esta na tela certa
  await expect(
    page.getByTestId('modal').getByRole('heading')
   ).toHaveText('Fila de espera')

  await page.locator('input[name="name"]').fill('Matheus')
  await page.getByPlaceholder('Seu email principal').fill('qalab@hotmail.com')

  await page.getByTestId('modal')
       .getByText('Quero entrar na fila!').click()
       
  const msg = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'

  await expect(page.locator('.toast')
       ).toHaveText(msg )

  await page.waitForTimeout(3000);

});


test('nao deve cadastrar quando o nome não é preenchido', async ({ page }) => {
  await page.goto('http://localhost:3000');

  //await page.click('//button[text()="Aperte o play... se tiver coragem"]')  
  await page.getByRole('button', {name: 'Aperte o play... se tiver coragem'}).click()

  //checkpoint verificar se esta na tela certa
  await expect(
    page.getByTestId('modal').getByRole('heading')
   ).toHaveText('Fila de espera')

  
  await page.locator('input[name="name"]').fill('Matheus')
  await page.getByPlaceholder('Seu email principal').fill('qalab.com.br')
  
  await page.getByTestId('modal')
       .getByText('Quero entrar na fila!').click()

});

test('nao deve cadastrar email incorreto', async ({ page }) => {
  await page.goto('http://localhost:3000');

  //await page.click('//button[text()="Aperte o play... se tiver coragem"]')  
  await page.getByRole('button', {name: 'Aperte o play... se tiver coragem'}).click()

  //checkpoint verificar se esta na tela certa
  await expect(
    page.getByTestId('modal').getByRole('heading')
   ).toHaveText('Fila de espera')

  await page.locator('input[name="email"]').fill('qalab@hotmail.com')

  await page.getByTestId('modal').getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
});

test('nao deve cadastrar quando o email não é preenchido', async ({ page }) => {
  await page.goto('http://localhost:3000');

  //await page.click('//button[text()="Aperte o play... se tiver coragem"]')  
  await page.getByRole('button', {name: 'Aperte o play... se tiver coragem'}).click()

  //checkpoint verificar se esta na tela certa
  await expect(
    page.getByTestId('modal').getByRole('heading')
   ).toHaveText('Fila de espera')

   await page.locator('input[name="name"]').fill('matheus')

   await page.getByRole('button', {name: 'Quero entrar na fila!'}).click()
   await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
});

test('nao deve cadastrar quando o nome e email não é preenchido', async ({ page }) => {
  await page.goto('http://localhost:3000');

  //await page.click('//button[text()="Aperte o play... se tiver coragem"]')  
  await page.getByRole('button', {name: 'Aperte o play... se tiver coragem'}).click()

  //checkpoint verificar se esta na tela certa
  await expect(
    page.getByTestId('modal').getByRole('heading')
   ).toHaveText('Fila de espera')


   await page.getByRole('button', {name: 'Quero entrar na fila!'}).click()
   
   await expect(page.locator('.alert')).toHaveText([
    'Campo obrigatório',
    'Campo obrigatório'
   ])
});