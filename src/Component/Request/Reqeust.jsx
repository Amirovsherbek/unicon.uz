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
        })
        return Data
    }
    catch(error){
        return {Message:error.message,userChecked:false}
    }
  }
  // tokenli requstBackend
export async function restokenFunction(method,url,data,token){
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
        //  console.log(error)
     }
  } 