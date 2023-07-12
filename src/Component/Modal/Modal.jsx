import { useContext, useState } from 'react';
import Input from '../input/Input';
import './Modal.css'
import { UseContext } from '../../App';
import { restokenFunction } from '../Request/Reqeust';
function Modal({closeModal,data}) {
   const BaseUrl=useContext(UseContext)
   const [userdata,setUserData]=useState({
    username:'',
    password:''
   })
   const token=localStorage.getItem('_token')
    function CloseModal(){
      closeModal()
   }
//    async function Update(){
//     const data=await restokenFunction("POST","",userdata,) 
//    }
   function HandleChange(type,value){
    if(type==='text'){
        setUserData({...userdata,username:value})
    }
    else if(type==='password'){
        setUserData({...userdata,password:value})
    }
   }
   console.log(data[0] ? "bor ekan":"yoq ekan")
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
                    defaultValue={data ? " edit":""}/>
                    <label htmlFor="password" >Пароль</label>
                    <Input props={{name:'user_password',placeholder:'password',
                    type:'text',userdata:userdata}}
                     HandleChange={HandleChange}
                     HandleFocus={function HandleFocus(){}}
                     defaultValue={data ? "edit ":""}/>                    
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