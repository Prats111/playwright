class APIUtils{

    constructor(apicontext,loginpayload){
        this.apicontext = apicontext;
        this.loginpayload = loginpayload;
    }

   async getToken(){
         const response = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
           {data: this.loginpayload});
         
          let loginresponsejson = await response.json();
          return loginresponsejson.token;
    }

    async createOrder(orderpayload){

        const responseobj = {};
        responseobj.token = await this.getToken();
        const response = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {data: orderpayload ,
              headers:{
                'Authorization' : responseobj.token,
                'content-type' : 'application/json'
              }
            });
            const responseJson = await response.json();
            responseobj.orderID = responseJson.orders[0];
            return responseobj;
    }
}
module.exports ={APIUtils};