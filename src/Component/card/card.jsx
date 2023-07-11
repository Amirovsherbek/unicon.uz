import { useState } from "react";
import "../../pages/user/user.css";
function Cardrow({ item, pageCount, key,setIsToogleModal }) {
  const [id, setID] = useState(false);
  return (
    <div key={key} className="user-list-title">
      <div className="icon">
        <span>T </span>
      </div>
      <div className="users-name">
        <div>
          <span>{item.id}</span>
          {/* {item.organization.name_ru} */}
          {item.title}
        </div>
        <div className="user-company-name">
          <span className="user-company-name-1">
            {/* {item.organization.name_cyr} */}
            {item.title}
          </span>
          {id ? (
            <span className="update">
              <span onClick={()=>setIsToogleModal(prev=>!prev)} className="update-child">
                <span
                  style={{
                    marginRight: " 10px ",
                    color: "rgba(0, 71, 135, 1)",
                  }}
                >
                  <i className="fa fa-sharp fa-solid fa-file-pen"></i>
                </span>
                <span >Ўзгартириш</span>
              </span>
            </span>
          ) : (
            ""
          )}
          <span
            className="user-company-name-2"
            onClick={() => setID((prev) => !prev)}
          >
            ...
          </span>
        </div>
      </div>
    </div>
  );
}
export default Cardrow;
