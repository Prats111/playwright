import {test,expect,request} from '@playwright/test'
import {APIUtils} from './utils/APIUtils'
const Loginpayload = {userEmail: "pratikshya069@gmail.com", userPassword: "Chunu@211"};

const orderpayload ={orders: [{country: "India", productOrderedId: "67a8dde5c0d3e6622a297cc8"}]};
let response ; let apiutils ;
const fakepayload = {data:[],message:"No Orders"};

test.beforeAll(async () =>{
    const apicontext = await request.newContext();
    apiutils = new APIUtils(apicontext,Loginpayload);
    response =await apiutils.createOrder(orderpayload);
    console.log("response",response);

})

test("api test",async({page}) =>{

  
   page.addInitScript(value => {
    window.localStorage.setItem('token',value);
  },response.token);
  
 await page.goto("https://rahulshettyacademy.com/client/");
 await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/67cfd004c019fb1ad620137b',async (route) =>{
  const originalresponse = await route.fetch();
  const originalresponseinJSON = await originalresponse.json();
  console.log("originalresponse",originalresponseinJSON);
  route.fulfill({
    status: originalresponse.status(),
    contentType : "application/json",
    body: JSON.stringify(fakepayload)
  })
});
 await page.locator("[routerlink*='myorders']").click();
  await page.waitForLoadState('networkidle');
 await page.getByText(" Please Visit Back Us ").isVisible();

})
