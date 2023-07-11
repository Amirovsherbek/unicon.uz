import "./user.css";
import FilesPlus from "../../assets/create.png";
import { useContext, useEffect, useState } from "react";
import Filter from "../../Component/Filter/Filter";
import Cardrow from "../../Component/card/card";
import Navbar from "../../Component/navbar/Navbar";
import BasicModal from "../../Component/Notifacion/Notifaction";
import Select from "../../Component/select/Select";
import { restokenFunction } from "../../Component/Request/Reqeust";
import Pagenation from "../../Component/pagenation/pagenation";
import Button from "../../Component/Button/Button";
import Modal from "../../Component/Modal/Modal";
import NotFound from "../../Component/NotFound/NotFound";
import Title from "../../Component/title/title";
import axios from "axios";
function UserPage() {
  const [data,setData]=useState([])
  const [pageCount,setPageCount]=useState(5)
  const [isToggleModal, setIsToogleModal] = useState(false);
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("_token");
  function CloseModal() {
    setIsToogleModal((prev) => !prev);
  }
  async function SearchUser(){ 
    const data = await restokenFunction(
      "GET",
      `/users/?search=${search}`,
      null,
      token
    );
    setData(data)
  }
  function OpenModal(){
    setIsToogleModal(prev=>!prev)
  }
  async function GetData(){
    setData(await axios('https://jsonplaceholder.typicode.com/todos').then(res=>{return res.data}))
    // setData(await restokenFunction("GET","/users/",null,token)) 
   
  } 
  useEffect(()=>{ 
   if(token){
    GetData()
   }
   },[])
  return (
    <div className={isToggleModal ? "user-page openmodal" : "user-page"}>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="filter">
        <form action="">
          <Filter Search={SearchUser} HandleChange={setSearch} />
          <Select
            name={"company_name"}
            className={null}
            data={[
              { id: 1, value: "Unicon.uz" },
              { id: 2, value: "ITpark.uz" },
              { id: 3, value: "Digital.uz" },
              { id: 4, value: "UniconSoft.uz" },
            ]}
          />
        </form>
        <div className="newuser">
          <Button className={""} type={'button'} icon={<i className=" fa fa-regular fa-file-plus"></i>} 
          value={<div>Фойдаланувчи яратиш</div>} HandleClick={OpenModal}/>
        </div>
      </div>
      <div className="users-list">
        <Title/>
        {
          data ? data.filter((item,index)=>{
            if((index+1)<pageCount){
              return item;
            }
          }).map((item)=>{
            return (
              <Cardrow isToggleModal={isToggleModal} 
                 setIsToogleModal={setIsToogleModal} 
                 item={item} key={item.id}/>
            )
          }):<NotFound message={"Topilmadi "} />
        }
      </div>
      <div className="pagenation">
        <Select 
          className={"page_count"}
          name={"count_page"}
          data={[
            { id: 1, value: "10 та бетда" },
            { id: 2, value: "20 та бетда" },
            { id: 3, value: "30 та бетда" },
            { id: 4, value: "40 та бетда" },
            { id: 5, value: "50 та бетда" },
          ]}
        />
        <div className="pagenation-second">
          <Pagenation size={data}/>
        </div>
      </div>
      {isToggleModal ? <div className="modal_box">   
          <Modal  closeModal={CloseModal} />
        </div>
       :" "
      }
    </div>
  );
}
export default UserPage;
