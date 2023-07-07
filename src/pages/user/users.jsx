import "./user.css";
import FilesPlus from "../../assets/create.png";
import { useContext, useEffect, useState } from "react";
import Modal from "../../Component/Modal/Modal";
import Filter from "../../Component/Filter/Filter";
import UserList from "../../Component/list/userlist";
import Navbar from "../../Component/navbar/Navbar";
import Notifacion from "../../Component/Notifacion/Notifaction";
import Select from "../../Component/select/Select";
import { restokenFunction } from "../../Component/Request/Reqeust";
import Pagenation from "../../Component/pagenation/pagenation";
import Button from "../../Component/Button/Button";
function UserPage() {
  const [isToggleModal, setIsToogleModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("_token");
  function CloseModal() {
    setIsToogleModal((prev) => !prev);
  }
  async function SearchUser() {
    const data = await restokenFunction(
      "GET",
      `/?search=${search}`,
      null,
      token
    );
    console.log(data)
  }
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
              { id: 1, value: "ITpark.uz" },
              { id: 1, value: "Digital.uz" },
              { id: 1, value: "UniconSoft.uz" },
            ]}
          />
        </form>
        <div className="newuser">
          <Button className={""}  icon={<i className=" fa fa-regular fa-file-plus"></i>} 
          value={<div>Фойдаланувчи яратиш</div>} HandleClick={setIsToogleModal}/>
        </div>
      </div>
      <div className="users-list">
        <UserList />
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
            { id: 4, value: "50 та бетда" },
          ]}
        />
        <div className="pagenation-second">
          <Pagenation />
        </div>
      </div>
      {isToggleModal ? (
        <div className="modal_box">   
          <Notifacion />{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default UserPage;
