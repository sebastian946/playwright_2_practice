const {test,expect} = require('@playwright/test');
const HomePage = require('../page/HomePage');
const DetailProduct = require('../page/DetailProduct');
const CartPage = require('../page/CartPage');
const HeaderComponent = require('../page/components/HeaderComponent');
const SignInLoginComponent = require('../page/components/SignInLoginComponent');
const { name, country, city, card, month, year, username, password } = require('../utils/generateData');

test('Buy a product success', async function({page,baseURL}){
    //! Declare the objects
    const cartPage = new CartPage(page);
    const headerComponent = new HeaderComponent(page);
    const signinlogin = new SignInLoginComponent(page,'signin');
    const login = new SignInLoginComponent(page,'login');
    const homePage = new HomePage(page,"Laptops");
    const detailProduct = new DetailProduct(page);
    
    //! Open url and declare the data variables 
    await page.goto(baseURL);
    const usernameTest = username();
    const passwordTest = password();
    const nameTest = name();
    const contryTest = country();
    const cityTest = city();
    const cardTest = card();
    const monthTest = month();
    const yearTest = year();

    //! Sign in user

    await headerComponent.clickSignIn();
    await signinlogin.fillForm(usernameTest,passwordTest);
    await page.waitForTimeout(2000);

    //! Login in user

    await headerComponent.clickLogin();
    await login.fillForm(usernameTest,passwordTest);
    await headerComponent.validateUserLogin(usernameTest);
    await page.waitForTimeout(2000);
    
    //! This is HomePage
    
    await homePage.clickCategory();
    await homePage.clickRandomProduct();
    
    //! This is Detail product
    
    await detailProduct.clickAddToCart();
    await detailProduct.validateAlert();
    await page.waitForTimeout(2000);

    //! This is header component

    await headerComponent.clickCarter();
    
    //!This is CartPage

    await cartPage.fillPurchaseForm(nameTest,contryTest,cityTest,cardTest,monthTest,yearTest);
    await cartPage.validateAlert();
})
