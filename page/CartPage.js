const{expect} = require('@playwright/test');

class CartPage{
    constructor(page,titleProduct){
        this.page = page;
        this.titleProduct = titleProduct;
        this.row = page.locator('//tr[@class="success"]');
        this.button_placeOrder = page.getByRole('button',{name:'Place Order'});
        this.input_name = page.locator('//input[@id="name"]');
        this.input_country = page.locator('//input[@id="country"]');
        this.input_city = page.locator('//input[@id="city"]');
        this.input_card = page.locator('//input[@id="card"]');
        this.input_month = page.locator('//input[@id="month"]');
        this.input_year = page.locator('//input[@id="year"]');
        this.button_purchase = page.getByRole('button',{name:'Purchase'});
        this.button_OK = page.getByRole('button',{name:'OK'});
        this.text_alert = page.locator('//p[@class="lead text-muted "]');
    }
    async validateNameProduct(){
        const count = this.row.count();
        let bool = false;
        for(let i=0;i<count;i++){
            const title = this.row.nth(i).locator('td').nth(1).innerText();
            if(title == this.titleProduct){
                bool = true;
            }
        }
        return bool;
    }
    async clickButtonPlaceOrder(){
        await this.button_placeOrder.click();
    }
    async fillName(name){
        await this.input_name.fill(name);
    }
    async fillCountry(country){
        await this.input_country.fill(country);
    }
    async fillCity(city){
        await this.input_card.fill(city);
    }
    async fillCard(card){
        await this.input_card.fill(card);
    }
    async fillMonth(month){
        await this.input_month.fill(month);
    }
    async fillYear(year){
        await this.input_year.fill(year);
    }
    async clickButtonPurchase(){
        await this.button_purchase.click();
    }
    async fillPurchaseForm(name,country,city,card,month,year){
        await this.clickButtonPlaceOrder();
        await this.fillName(name);
        await this.fillCountry(country);
        await this.fillCity(city);
        await this.fillCard(card);
        await this.fillMonth(month);
        await this.fillYear(year);
        await this.clickButtonPurchase();
    }
    async clickOkButton(){
        await this.button_OK.click();
    }
    async showText(){
        const text = await this.text_alert.innerText();
        console.log(text);
    }
    async validateAlert(){
        await this.showText();
        await this.clickOkButton();
        //await expect(this.page).toHaveURL(/index.html/);
    }
}

module.exports = CartPage;