import { useState } from 'react'
import '../../pages/user/user.css'
import Title from '../title/title'
function UserList({ data,pageCount }) {
    const [id,setID]=useState(false)
    return (
        <>
          <Title/>
            {
                data ? data.sort((a,b)=>a.id-b.id).map(item=>{
                    return (
                        <div key={item.id} className="user-list-title">
                        <div className="icon">
                            <span>T </span>
                        </div>
                        <div className="users-name">
                            <div><span>{item.id}</span>{item.organization.name_ru}</div>
                            <div className='user-company-name'>
                                <span>{item.organization.name_cyr}</span>
                                {
                                     id ? <span className="update">
                                     <span></span>
                                     <span>Ўзгартириш</span>
                                 </span>:"" 
                                }
                                <span onClick={()=>setID(prev=>!prev)}>...</span>
                            </div>
                        </div>
                    </div>
                    )
                }):<div id={"loadingTable"}>Loading...</div>
            }
        </>
    )
}
export default UserList