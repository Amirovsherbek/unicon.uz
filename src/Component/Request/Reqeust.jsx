import axios from 'axios'
const BaseUrl='http://192.168.11.149:4500/api'
export async  function resFunction(method, url,data) {
    try{
      const Data=await axios({
            method:method,
            url:BaseUrl+url,
            data:data,
            headers:{
                "Content-Type":"application/json",
                // 'Authorization': `Bearer ${token}`
            }
        }).then(res=>{
           if(res.data.access!==" " && res.data.refresh!==" "){
            restokenFunction("POST",'/token/refresh/',{refresh:res.data.refresh},res.data.access)
            return res
           }
           else if(res.status==404 ){
             return {status:res.status,
             message:"Tarmoqda uzilish yoki internet qo'shilgan ishonch hosil qiling",
             statusText:"Aloqa o'rnatib bo'lmadi",
            }
           }
        })
        console.log(Data)
        return Data
    }
    catch(error){
       return {Message:"/stop",userChecked:false}
    }
  }
export  function restokenFunction(method,url,data,token){
    console.log(method+url+data)
    try{
        axios({
            method:method,
            url:BaseUrl+url,
            data:data,
            headers:{
                "Content-Type":'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res=>{
            if(res.data!==""){
                console.log(res)
                localStorage.setItem("_token",res.data.access)
            }
        })
        return res.data
     }
     catch(error){
        console.log(error)
     }
  } 