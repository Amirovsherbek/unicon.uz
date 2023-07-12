import "./user.css";
import FilesPlus from "../../assets/create.png";
import { useContext, useEffect, useState } from "react";
import Filter from "../../Component/Filter/Filter";
import Navbar from "../../Component/navbar/Navbar";
import BasicModal from "../../Component/Notifacion/Notifaction";
import Select from "../../Component/select/Select";
import { restokenFunction } from "../../Component/Request/Reqeust";
import Button from "../../Component/Button/Button";
import Modal from "../../Component/Modal/Modal";
import NotFound from "../../Component/NotFound/NotFound";
import Title from "../../Component/title/title";
import axios from "axios";
import PaginatedTable from "../../Component/table/table";
function UserPage() {
  const [data, setData] = useState([]);
  const [isToggleModal, setIsToogleModal] = useState(false);
  const [search, setSearch] = useState("");
  const [update,setUpdate]=useState(0)
  const token = localStorage.getItem("_token");
  function CloseModal() {
    setIsToogleModal((prev) => !prev);
  }
  async function SearchUser() {
    const data = await restokenFunction(
      "GET",
      `/users/?search=${search}`,
      null,
      token
    );
    setData(data);
  }
  function OpenModal() {
    setIsToogleModal((prev) => !prev);
  }
  async function GetData() {
    setData(
      await axios("https://jsonplaceholder.typicode.com/todos").then((res) => {
        return res.data;
      })
    );
    // setData(await restokenFunction("GET","/users/",null,token))
  }
  async function UserChange(parm){
    setIsToogleModal(prev=>!prev)
    setUpdate(parm)
  }
  useEffect(() => {
    if (token) {
      GetData();
    }
  }, []);
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
      <div className="users-list">
        <Title />
        {data ? (
          <PaginatedTable rows={data} UserChange={UserChange}/>
        ) : (
          <NotFound message={"Topilmadi "} />
        )}
      </div>

      {isToggleModal ? (
        <div className="modal_box">
          <Modal closeModal={CloseModal} data={data.filter(item=>item.id===parseInt(update))} />
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
export default UserPage;


