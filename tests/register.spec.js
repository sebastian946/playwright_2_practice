const {test,expect} = require('@playwright/test');
const SignInLoginComponent = require('../page/components/SignInLoginComponent');
const { password, name, username } = require('../utils/generateData');
const HeaderComponent = require('../page/components/HeaderComponent');

test('Register successfully', async function({page,baseURL}){
    const signinlogin = new SignInLoginComponent(page,'signin');
    const headerComponent = new HeaderComponent(page);
    await page.goto(baseURL);
    const usernameTest = username();
    const passwordTest = password();
    await headerComponent.clickSignIn();
    await signinlogin.fillForm(usernameTest,passwordTest);

    /* In this part of the code validate the alert show when the finish the register */
    await page.on('dialog',async dialog =>{
        await expect(dialog.type()).toBe('alert');
        const message = dialog.message();
        console.log(`Message alert: ${message}`);
        await expect(message).toContain('successful');
        await dialog.accept();
    })
    await page.waitForTimeout(2000);
})