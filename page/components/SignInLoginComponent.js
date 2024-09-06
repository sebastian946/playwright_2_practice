
class SignInLoginComponent{
    constructor(page,method){
        this.page = page;
        this.method = method;
    }
    async fillForm(username,password){
        const dictionaryMethod ={
            "signin": "sign-",
            "login": "login"
        }
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        await this.page.locator(`//input[@id="${dictionaryMethod[this.method]}username"]`).fill(username);
        await this.page.locator(`//input[@id="${dictionaryMethod[this.method]}password"]`).fill(password);
        if(this.method == "signin"){
            await this.page.locator('//button[.="Sign up"]').click();
        }else{
            await this.page.locator('//button[.="Log in"]').click();
        }
    }
}
module.exports = SignInLoginComponent;