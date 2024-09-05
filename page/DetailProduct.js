const{expect} = require('@playwright/test');

class DetailProduct{
    constructor(page,titleProduct){
        this.page = page;
        this.titleProduct = titleProduct;
        this.title = page.locator('//h2[@class="name"]');
        this.button_addCart = page.getByRole('link',{name:'Add to cart'});
        this.link_cart = page.locator('//a[@id="cartur"]');
    }
    async validateTitle(){
        await expect(this.title.innerText).toContain(this.titleProduct);
    }
    async clickAddToCart(){
        await this.button_addCart.click();
    }
    async validateAlert(){
        this.page.on('dialog', async dialog =>{
            await expect(dialog.type()).toBe('alert');
            const alertMessage = dialog.message();
            console.log(alertMessage);
            await dialog.accept();
        });
    }
    async clickCarter(){
        await this.link_cart.first().click();
    }
}
module.exports = DetailProduct;