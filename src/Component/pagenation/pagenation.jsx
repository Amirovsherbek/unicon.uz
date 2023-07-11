import { useState } from "react";
import BasicModal from "../Notifacion/Notifaction";

function Pagenation({size}){
  const [handleModal,setHandleModal]=useState(false)  
  return (
        <>
         <div className="page-next">
          {
            handleModal ? <BasicModal/>: ' '
          }
            <i onClick={()=>setHandleModal(prev=>!prev)} className="fa-solid fa fa-chevron-left"></i>
          </div>
          {
            size ? size.map((item,index)=>{
              if(index%10===0){
                return (
                  <span className="page_id page_id_active">{index/10}</span>
                )
              }
            }):"......."
          }
          <div className="page-next">
            <i className="fa-solid fa fa-chevron-right"></i>
          </div>
        </>
    )
}
export default Pagenation;