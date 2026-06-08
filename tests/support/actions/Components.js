import { test, expect } from '@playwright/test';

export class Toast {
   
    constructor(page){
        this.page= page
    }
    
// Quando uma ação dispara mais de um toast, pegamos o que contém a mensagem esperada
  async toasHaveText(msg) {
    const toast = this.page.locator('.toast').filter({ hasText: msg }).last()
    await expect(toast).toHaveText(msg)

    await this.page.waitForTimeout(3000);
  }

  async containText(msg) {
    const toast = this.page.locator('.toast').filter({ hasText: msg }).last()
    await expect(toast).toContainText(msg)
       
    await this.page.waitForTimeout(3000);

  }
}
