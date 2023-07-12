import React, { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
// 👆 classic theme, see below for other theme / css options

function Pagenation({TotalPages,handleChange,currentPage}) {
  const totalPages = TotalPages;

  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={handleChange}
     nextLabel={<i className="fa-solid fa fa-chevron-right"></i>}
     previousLabel={<i className="fa-solid fa fa-chevron-left"></i>}
     activeItemClassName='page_id_active'
     nextClassName="page-next"
     previousClassName="page-next"
     pageLinkClassName={"page_id page_id_unactive"}
     className='pagenation_ul'
    />
  );
}
export default Pagenation
// import { useState } from "react";
// import BasicModal from "../Notifacion/Notifaction";

// function Pagenation({size}){
//   const [handleModal,setHandleModal]=useState(false)  
//   return (
//         <>
//          <div className="page-next">
//           {
//             handleModal ? <BasicModal/>: ' '
//           }
//             <i onClick={()=>setHandleModal(prev=>!prev)} className="fa-solid fa fa-chevron-left"></i>
//           </div>
//           {
//             size ? size.map((item,index)=>{
//               if(index <31 && index%10===0){
//                 return (
//                   <span className="page_id page_id_active">{index/10}</span>
//                 )
//               }
//             }):"......."
//           }
//           <div className="page-next">
//             <i className="fa-solid fa fa-chevron-right"></i>
//           </div>
//         </>
//     )
// }
// export default Pagenation;