const {test,expect} = require('@playwright/test');
const HomePage = require('../page/HomePage');
const DetailProduct = require('../page/DetailProduct');
const CartPage = require('../page/CartPage');
const { name, country, city, card, month, year } = require('../helper/generateData');

const url = 'https://www.demoblaze.com/index.html';
test('Buy a product success', async function({page}){
    await page.goto(url);
    const homePage = new HomePage(page,"Laptops");
    const nameTest = name();
    const contryTest = country();
    const cityTest = city();
    const cardTest = card();
    const monthTest = month();
    const yearTest = year();
    
    //! This is HomePage
    
    await homePage.clickCategory();
    await homePage.clickRandomProduct();
    
    //! This is Detail product
    
    const detailProduct = new DetailProduct(page);
    await detailProduct.clickAddToCart();
    await detailProduct.validateAlert();
    await page.waitForTimeout(2000);
    await detailProduct.clickCarter();
    
    //!This is CartPage
    const cartPage = new CartPage(page);
    await cartPage.fillPurchaseForm(nameTest,contryTest,cityTest,cardTest,monthTest,yearTest);
    await cartPage.validateAlert();
})
