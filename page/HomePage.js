const{expect} = require('@playwright/test');

class HomePage{
    constructor(page,category){
        this.page = page;
        this.category = page.locator(`//a[.="${category}"]`);
        this.products = page.locator('//h4[@class="card-title"]/a');
    }
    async clickCategory(){
        await this.category.click();
    }
    async clickRandomProduct(){
        const randomIndex = await this.randomElement();
        await this.products.nth(randomIndex).click();
    }
    async returnTitle(){
        const randomIndex = await this.randomElement();
        return await this.products.nth(randomIndex).first().innerText();
    }
    

    async randomElement(){
        const count = await this.products.count();
        const randomNumber = Math.floor(Math.random() * count);
        console.log(randomNumber);
        return randomNumber;
    }
    
}
module.exports = HomePage;