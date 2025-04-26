class Login{
    constructor(page){
        console.log("inside constructor");
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.signin = page.locator("[type='submit']");
    }
   async validLogin(username , password){
    
       await this.username.fill(username);
       await this.password.fill(password);
       await this.signin.click();
       
        //  await this.page.locator(".card-body").first().waitFor();
    }

}
module.exports = {Login};