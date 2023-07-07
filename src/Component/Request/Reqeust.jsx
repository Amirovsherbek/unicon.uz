import axios from 'axios'
const BaseUrl='http://192.168.11.149:4500/api'
// tokensiz requstBackend funksiya
export async  function resFunction(method, url,data) {
    try{
      const Data=await axios({
            method:method,
            url:BaseUrl+url,
            data:data,
            headers:{
                "Content-Type":"application/json",
            }
        }).then(res=>{
           if(res.data.access!==" " && res.data.refresh!==" "){
              return res.data
           }
           else if(res.status==404 ){
             return {status:res.status,
             message:"Tarmoqda uzilish yoki internet qo'shilgan ishonch hosil qiling",
             statusText:"Aloqa o'rnatib bo'lmadi",
            }
           }
        })
        return Data
    }
    catch(error){
       return {Message:"/stop",userChecked:false}
    }
  }
  // tokenli requstBackend
export async function restokenFunction(method,url,data,token){
    console.log(token)
    console.log(data)
    console.log(method+url)
    try{
    const Data=await axios({
            method:method,
            url:BaseUrl+url,
            data:data,
            headers:{
                "Content-Type":'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res=>{
          
            return res.data
        })
        return Data 
     }
     catch(error){
         console.log(error)
     }
  } 