const { expect } = require("playwright/test");


class HeaderComponent{
    constructor(page){
        this.page = page;
        this.link_cart = page.locator('//a[@id="cartur"]');
        this.link_login = page.locator('//a[@id="login2"]');
        this.link_signin = page.locator('//a[@id="signin2"]');
        this.link_user_login = page.locator('//a[@id="nameofuser"]');
    }
    async clickCarter(){
        await this.link_cart.first().click();
    }
    async clickLogin(){
        await this.link_login.click();
    }
    async clickSignIn(){
        await this.link_signin.click();
    }
    async validateUserLogin(nameUser){
        await this.link_user_login.waitFor({ state: 'visible' });
        const text = await this.link_user_login.textContent();
        await expect(text).toContain(nameUser);
    }
}
module.exports = HeaderComponent;