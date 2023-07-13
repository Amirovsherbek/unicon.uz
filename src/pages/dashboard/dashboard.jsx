import "./dashboard.css";
import LogoTop from "../../assets/icon1.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resFunction, restokenFunction } from "../../Component/Request/Reqeust";
import Input from "../../Component/input/Input";
import Loading from "../../Component/loading/loading";
import Button from "../../Component/Button/Button";
import { UseContext } from "../../App";
function Dashboard() {
  const navigate = useNavigate();
  // const [error,setError]
  const { Token } = useContext(UseContext);
  const [inputFocus, setInputFocus] = useState({
    login: false,
    password: false,
    seePassword: false,
  });
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({
    password_info: "",
    login_info: "",
    checked: false,
  });
  const [authorion, setAuthrion] = useState({
    login_name: "",
    password: "",
  });
  const notify = (parm) => toast(parm);
  async function Checked() {
    if (authorion.login_name.length > 8 && authorion.login_name.length < 16 &&
      authorion.password.length > 8 && authorion.password.length < 16) {
      if (authorion.login_name !== " " &&
        authorion.password !== "" ) {
        setLoading(false);
        const data = await resFunction("POST", "/token/", authorion);
        if (data.access) {
          const tokenData = await restokenFunction(
            "POST",
            "/token/refresh/",
            data,
            data.access
          );

          if (tokenData.access) {
            localStorage.setItem("_token", tokenData.access);
            const data = await restokenFunction(
              "GET",
              "/users/me/",
              null,
              tokenData.access
            );
            if (data) {
              if (data.role.name_uz === "Super Admin") {
                Token(data.role.name_uz);
                localStorage.setItem("role", data.role.name_uz);
                if (localStorage.getItem("role") === "Super Admin") {
                  setLoading(true);
                  navigate("/user");
                }
              } else if (data.role.name_uz === "Operator") {
                console.log("operator");
                localStorage.setItem("role", data.role.name_uz);
                navigate("/stop");
              } else {
                navigate("/");
              }
            }
          }
        } else if (data.Message === "Request failed with status code 401") {
          setLoading(true);
          notify("Parol yoki Login  Xato!");
        }
      } else {
        notify("Login yoki parol tering!");
      }
    }
    else{
       if(authorion.login_name.length<8 && authorion.login_name>16){
        setInfo({...info,login_info:"qayta kiriting minimal 8 ta va maximal 16 ta belgidan iborat bo'lish kerak"})
       }
       else if(authorion.password.length<8 && authorion.password>16){
        setInfo({...info,password_info:"qayta kiriting minimal 8 ta va maximal 16 ta belgidan iborat bo'lish kerak"})
       }
       else {
        notify("xatooo")
       }
    }
   
  }
  function HandLeChange(type, value) {
    if (type === "text") {
      setAuthrion({ ...authorion, login_name: value });
    }
    if (type === "password") {
      setAuthrion({ ...authorion, password: value });
    }
  }
  function HandleFocus(type, boelean) {
    if (type == "text") {
      setInputFocus({ ...inputFocus, login: boelean });
    }
    if (type == "password") {
      setInputFocus({ ...inputFocus, password: boelean });
    }
  }
  return (
    <>
      {" "}
      {loading ? (
        <div className="dashboard-pages">
          <ToastContainer />
          <div className="logo-top">
            <img src={LogoTop} alt="logotip" />
           
          </div>
          <div className="Authorization">
            <div className="Authorization-box">
              <div className="yellow-line">
                <span></span>
              </div>
              <form className="form">
                <div className="title-box">
                  <div>Кириш</div>
                  <div>Давом эттириш учун, киринг</div>
                </div>
                <label style={{ width: "100%", display: "block" }}>
                  {info.login_info}
                </label>
                <div className="login-box">
                  <span
                    className={
                      inputFocus.login ? "login-line seeLine" : "login-line "
                    }
                  ></span>
                  <Input
                    props={{
                      type: "text",
                      name: "login",
                      placeholder: "Логин",
                      focus: inputFocus,
                    }}
                    HandleChange={HandLeChange}
                    HandleFocus={HandleFocus} //props send Input.js component function
                  />
                </div>
                <label style={{ width: "100%", display: "block" }}>
                  {info.password_info}
                </label>
                <div className="password-box">
                  <span
                    className={
                      inputFocus.password ? "login-line seeLine" : "login-line "
                    }
                  ></span>

                  <Input
                    props={{
                      type: inputFocus.seePassword ? "text" : "password",
                      name: "password", //props send object
                      placeholder: "Пароль",
                      focus: inputFocus,
                    }}
                    HandleChange={HandLeChange}
                    HandleFocus={HandleFocus} //function props send Input.js
                  />
                  <span
                    onClick={() =>
                      setInputFocus({
                        ...inputFocus,
                        seePassword: !inputFocus.seePassword,
                      })
                    }
                    className="eyes"
                  >
                    {inputFocus.seePassword ? (
                      <i className="fa fa-solid fa-eye-slash"></i>
                    ) : (
                      <i className="fa fa-solid fa-eye"></i>
                    )}
                  </span>
                </div>
                <Button
                  className={""}
                  type="button"
                  value={"Кириш"}
                  HandleClick={Checked}
                  disabled={
                    authorion.login_name && authorion.password ? false : true
                  }
                />
              </form>
            </div>
          </div>
          <div className="logo-bottom">
            <img src={LogoTop} alt="logotip" />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Dashboard;
