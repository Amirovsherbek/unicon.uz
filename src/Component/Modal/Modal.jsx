import { useContext, useState } from 'react';
import Input from '../input/Input';
import './Modal.css'
import { restokenFunction } from '../Request/Reqeust';
function Modal({closeModal,data,user,setSuccess}) {
   const [userdata,setUserData]=useState({
    login_name:'',
    password:'',
    role:4,
    organization:1481
   })
   const token=localStorage.getItem('_token')
    function CloseModal(){
      closeModal()
   }
   async function UserChange(type,parm){
    console.log(type,parm)
    if(type==='create'){
        const data=await restokenFunction("POST","/users/",userdata,localStorage.getItem('_token'))
       if(data){
        setSuccess(false)
       }
       else{
        console.log('iwlaaaaaaaaa')
       }
    } 
    else if(type==="edit"){
      console.log(parm)
       
       setUserData({...userdata,role:parm.role.id,organization:parm.organization.id})
       console.log(userdata)
       const data=await restokenFunction("PUT",`/users/${parm.id}`,userdata,localStorage.getItem('_token'))
       console.log(data)
    }
   }
   function HandleChange(type,value){
    if(type==='text'){
        setUserData({...userdata,login_name:value})
    }
    else if(type==='password'){
        setUserData({...userdata,password:value})
    }
   }
 
    return (
        <div  className="Modal">
            <div className="Modal-header">
                <div className="Modal-header-title">
                    <span>Янги фойдаланувчи яратиш</span>
                    <span onClick={CloseModal}><i className="fa-solid fa-xmark"></i></span>
                </div>
            </div>
            <div className="Modal_body">
                <form className='modal-form'>
                    <label htmlFor="login" >Логин</label>
                    <Input props={{name:'user_name', placeholder:'login',
                    type:'text',userdata:userdata}}
                    HandleChange={HandleChange}
                    HandleFocus={function HandleFocus(){}}
                    defaultValue={data[0] ?  data[0].login_name:" "}/>
                    <label htmlFor="password" >Пароль</label>
                    <Input props={{name:'user_password',placeholder:'password',
                    type:'password',userdata:userdata}}
                     HandleChange={HandleChange}
                     HandleFocus={function HandleFocus(){}}
                     defaultValue={data[0] ? "":" "}/>                    
                    <div className="save">
                    <button  type='button' onClick={()=>UserChange(data[0] ? 'edit':"create",data[0])}>
                        <span>
                            <i className="fa fa-solid fa-check"></i>
                        </span>Сақлаш</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Modal;