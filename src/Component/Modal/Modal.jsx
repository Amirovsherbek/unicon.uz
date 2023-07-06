import { useContext, useState } from 'react';
import Input from '../input/Input';
import './Modal.css'
import axios from 'axios';
import { UseContext } from '../../App';
function Modal(props) {
   const BaseUrl=useContext(UseContext)
   const [userdata,setUserData]=useState({
    username:'',
    password:''
   })
    function CloseModal(){
      props.CloseModal()
   }
   function HandleChange(type,value){
    if(type==='text'){
        setUserData({...userdata,username:value})
    }
    else if(type==='password'){
        setUserData({...userdata,password:value})
    }
   }
   function NewUserSave(){
    try{
        axios({
            url:BaseUrl+'',
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userdata)
        })
        .then(res=>res.json())
        .then(res=>console.log(res.data))
    }
    catch(error){
        console.log(error)
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
                    HandleFocus={function HandleFocus(){}}/>
                    <label htmlFor="password" >Пароль</label>
                    <Input props={{name:'user_password',placeholder:'password',
                    type:'text',userdata:userdata}}
                     HandleChange={HandleChange}
                     HandleFocus={function HandleFocus(){}}/>                    
                    <div className="save">
                    <button>
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