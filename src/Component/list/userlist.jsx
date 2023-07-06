import { useEffect, useState } from 'react'
import '../../pages/user/user.css'
import { resFunction, restokenFunction } from '../Request/Reqeust'
function UserList({ update, setUpate }) {
  const [data,setData]=useState([])
  async function GetData(){
     const resdata=await restokenFunction("GET","/users/",null,localStorage.getItem("_token"))
     console.log(resdata)
     setData([...resdata])
  } 
  useEffect(()=>{
   GetData()
   },[])
    return (
        <>
            <div className="user-list-title">
                <div className="card-user-title">
                    <div>Фойдаланувчи номи</div>
                    <div>Ташкилот номи</div>
                </div>
            </div>
            <div className="user-list-title">
                <div className="icon">
                    <span>T</span>
                </div>
                <div className="users-name">
                    <div><span>1</span> minstroy</div>
                    <div className='user-company-name'>
                        <span>Ўзбекистон Республикаси Қурилиш вазирлиги</span>
                        {
                            update ? <span className="update">
                                <span></span>
                                <span>Ўзгартириш</span>
                            </span> : ''
                        }
                        <span onClick={() => setUpate(prev => !prev)}>...</span>
                    </div>
                </div>
            </div>
            <div className="user-list-title">
                <div className="icon">
                    <span>T</span>
                </div>
                <div className="users-name">
                    <div><span>1</span> minstroy</div>
                    <div className='user-company-name'>
                        <span>Ўзбекистон Республикаси Қурилиш вазирлиги</span>
                        {
                            update ? <span className="update">
                                <span></span>
                                <span>Ўзгартириш</span>
                            </span> : ''
                        }
                        <span onClick={() => setUpate(prev => !prev)}>...</span>
                    </div>
                </div>
            </div>
            <div className="user-list-title">
                <div className="icon">
                    <span>T</span>
                </div>
                <div className="users-name">
                    <div><span>1</span> minstroy</div>
                    <div className='user-company-name'><span>Ўзбекистон Республикаси Қурилиш вазирлиги</span>
                        {
                            update ? <span className="update">
                                <span></span>
                                <span>Ўзгартириш</span>
                            </span> : ''
                        }
                        <span onClick={() => setUpate(prev => !prev)}>...</span>
                    </div>
                </div>
            </div>
            <div className="user-list-title">
                <div className="icon">
                    <span>T</span>
                </div>
                <div className="users-name">
                    <div><span>1</span> minstroy</div>
                    <div className='user-company-name'><span>Ўзбекистон Республикаси Қурилиш вазирлиги</span>
                        {
                            update ? <span className="update">
                                <span></span>
                                <span>Ўзгартириш</span>
                            </span> : ''
                        }
                        <span onClick={() => setUpate(prev => !prev)}>...</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserList