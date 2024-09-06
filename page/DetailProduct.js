const{expect} = require('@playwright/test');

class DetailProduct{
    constructor(page,titleProduct){
        this.page = page;
        this.titleProduct = titleProduct;
        this.title = page.locator('//h2[@class="name"]');
        this.button_addCart = page.getByRole('link',{name:'Add to cart'});
    }
    async validateTitle(){
        await expect(this.title.innerText).toContain(this.titleProduct);
    }
    async clickAddToCart(){
        await this.button_addCart.click();
    }

    /* This code validate the alert when click happen in the add to cart */
    async validateAlert(){
        this.page.on('dialog', async dialog =>{
            await expect(dialog.type()).toBe('alert');
            const alertMessage = dialog.message();
            console.log(alertMessage);
            await dialog.accept();
        });
    }
}
module.exports = DetailProduct;