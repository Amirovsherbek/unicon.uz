import {useEffect, useState } from "react";
//import FilesPlus from "../../assets/create.png";
import {useNavigate} from 'react-router-dom'
import Filter from "../../Component/Filter/Filter";
import Navbar from "../../Component/navbar/Navbar";
 import BasicModal from "../../Component/Notifacion/Notifaction";
import Select from "../../Component/select/Select";
import { restokenFunction } from "../../Component/Request/Reqeust";
import Button from "../../Component/Button/Button";
import Modal from "../../Component/Modal/Modal";
import NotFound from "../../Component/NotFound/NotFound";
import Title from "../../Component/title/title";
import PaginatedTable from "../../Component/table/table";
import "./user.css";
function UserPage() {
  const [data, setData] = useState([]);
  const [isToggleModal, setIsToogleModal] = useState(false);
  const [search, setSearch] = useState("");
  const [update,setUpdate]=useState(0)
  const [success,setSuccess]=useState(true)
  const navigate = useNavigate();
  const token = localStorage.getItem("_token");
  function CloseModal() {
    setIsToogleModal(false);
    console.log(isToggleModal)
  }
  async function SearchUser() {
    if(!localStorage.getItem('_token')){
      navigate('/')
    }
    const data = await restokenFunction(
      "GET",
      `/users/?search=${search}`,
      null,
      token
    );
    setData(data);
  }
  function OpenModal() {
    if(!localStorage.getItem('_token')){
      navigate('/')
    }
    setIsToogleModal((prev) => !prev);
    setUpdate(0)
  }
  async function GetData() {
     setData(await restokenFunction("GET","/users/",null,token))
  }
  async function UserChange(parm){
    if(!localStorage.getItem('_token')){
      navigate('/')
    }
    setIsToogleModal(true)
    setUpdate(parm)
  }
  useEffect(() => {
    if (token) {
      GetData();
    }
  }, []);
  console.log(isToggleModal)
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
              { id: 1, item: "Unicon.uz", value: "Unicon.uz" },
              { id: 2, item: "ITpark.uz", value: "ITpark.uz" },
              { id: 3, item: "Digital.uz", value: "Digital.uz" },
              { id: 4, item: "UniconSoft.uz", value: "UniconSoft.uz" },
            ]}
          />
        </form>
        <div className="newuser">
          <Button
            className={""}
            type={"button"}
            icon={<i className=" fa fa-regular fa-file-plus"></i>}
            value={<div>Фойдаланувчи яратиш</div>}
            HandleClick={OpenModal}
          />
        </div>
      </div>
      <div  className="users-list">
        <Title />
        {data ? (
          <PaginatedTable  rows={data} UserChange={UserChange}/>
        ) : (
          <NotFound message={"Topilmadi "} />
        )}
      </div>

      {isToggleModal ? (
        <div  className="modal_box">
          {
            success ? <Modal user={data} closeModal={CloseModal} 
            data={data.filter(item=>item.id===parseInt(update))} setSuccess={setSuccess}/>
            :<BasicModal setIsToogleModal={setIsToogleModal} setSuccess={setSuccess} />
          }
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
export default UserPage;


