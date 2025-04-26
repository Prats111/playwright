import { Locator, Page } from "@playwright/test";

export class Login{

    page:Page;
    username:Locator;
    password:Locator;
    signin:Locator;

    constructor(page :Page){
        console.log("inside constructor");
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.signin = page.locator("[type='submit']");
    }
   async validLogin(username: string , password : string){
    
       await this.username.fill(username);
       await this.password.fill(password);
       await this.signin.click();
       
        //  await this.page.locator(".card-body").first().waitFor();
    }

}
