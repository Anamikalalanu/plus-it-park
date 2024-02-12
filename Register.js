const instance =require("./axios")
let {token} = require("./axios")
const register= async()=>{
    const data={
name:"anamika",
email:"anamika12@gmail.com",
password:"anamika@11"
    }
    try{
        const response= await instance.post("/api/register",data)
        console.log(response)
        token = response.data.token
    }catch(err){
console.log(err);
    }
  
}
register()