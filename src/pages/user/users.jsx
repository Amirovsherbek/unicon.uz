import './user.css'
import FilesPlus from '../../assets/create.png'
import { useContext, useEffect, useState } from 'react'
import Modal from '../../Component/Modal/Modal'
import Filter from '../../Component/Filter/Filter'
import UserList from '../../Component/list/userlist'
import Navbar from '../../Component/navbar/Navbar'
import { UseContext } from '../../App'
import axios from 'axios'
function UserPage() {
    const [isToggleModal,setIsToogleModal]=useState(false)
    const [update,setUpdate]=useState(false)
    const [search,setSearch]=useState('')
    const BaseUrl=useContext(UseContext)
    function Search(){
        try{
            axios({
                url:BaseUrl+`/?search=${search}`,
                method:"GET",
                headers:{
                    'Content-Type': 'application/json',
                }})
                .then(res=>res.json())
                .then(res=>console.log(res.data))}
        catch(err){
             console.log(err)
        }       
    }
    function GetUsers(){
        axios({
            url:BaseUrl+"/",
            method:"GET",
        })
        .then(res=>res.json())
        .then(res=>console.log(res.data))
    }
    function CloseModal(){
        setIsToogleModal(prev=>!prev)
    }
    useEffect(()=>{
        GetUsers()
    })
    return (
        <div className={ isToggleModal ? "user-page openmodal":'user-page'}>
            <div className="navbar">
               <Navbar/>   
            </div>
            <div className="filter">
                <form action="">
                   <Filter  Search={Search} HandleChange={setSearch}/>
                    <select name="company_name"  >
                        <option value="unicon.uz">Tanlang...</option>
                        <option value="unicon.uz">Unicon.uz</option>
                        <option value="Digital.uz">Digital.uz</option>
                        <option value="ITpark">ITpark</option>
                        <option value="tuit.uz">tuit.uz</option>
                    </select>
                </form>
                <div className="newuser">
                    <button onClick={()=>setIsToogleModal(prev=>!prev)}>
                        <div><img src={FilesPlus} alt="" /></div>
                        <div>Фойдаланувчи яратиш</div>
                    </button>
                </div>
            </div>
            <div className="users-list">
                <UserList update={update} setUpate={setUpdate}/>
            </div>
            <div className="pagenation">
                <select className="page_count">
                    <option value="10_bet">10 та бетда</option>
                    <option value="20_bet">20 та бетда</option>
                    <option value="30_bet">30 та бетда</option>
                </select>
                <div className="pagenation-second">
                    <div className='page-next'><i className="fa-solid fa fa-chevron-left"></i></div>
                    <span className='page_id page_id_active'>1</span>
                    <span className='page_id page_id_unactive'>2</span>
                    <span className='page_id page_id_unactive'>3</span>
                    <span  className='page_id page_id_unactive'>....</span>
                    <span className='page_id page_id_unactive'>14</span>
                    <div className='page-next'><i className="fa-solid fa fa-chevron-right"></i></div>
                </div>

            </div>
            {
                isToggleModal ? <div className="modal_box">
                 <Modal CloseModal={CloseModal}/>  </div>:""
              
            }
        </div>
    )
}
export default UserPage