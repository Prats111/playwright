import { type Page, type Locator } from "@playwright/test";

let message1 : string = "hello";


let age : number = 20;
let isActive : boolean = false;

let arr : number[] = [1,2,3];

let data : any = "test"

data = 42;
console.log(message1);


function add(a:number,b:number):number
{
    return a+b;
}
add(3,4);

let user :{name : string , age : number}= {name : "chunu" , age : 34};


class Login{
    page:Page;
    username:Locator;
    password:Locator;
    signin:Locator;
    constructor(page: Page){
        console.log("inside constructor");
        this.page = page;
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signin= page.locator("#login");
    }
}