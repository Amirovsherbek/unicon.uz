import './dashboard.css'
import LogoTop from '../../assets/icon1.png'
import { useState, useContext, useEffect } from 'react'
import { resFunction, restokenFunction } from '../../Component/Request/Reqeust'
import Input from '../../Component/input/Input'
import { Navigate,useNavigate } from 'react-router-dom'
import Loading from '../../Component/loading/loading'
function Dashboard() {
    const token=localStorage.getItem("_token")
    const navigate = useNavigate();
    const [inputFocus, setInputFocus] = useState({
        login: false,
        password: false,
        seePassword: false
    })
    const [loading,setLoading]=useState(true)
    const [authorion, setAuthrion] = useState({
        login_name: "super_admin",
        password: "rtyfghvbn",
    })
   async function Checked() {
    setLoading(false)
       const data=await resFunction('POST', '/token/', authorion);
       if(data){
        setLoading(true)
        navigate('/user')
    }
       if(data.userChecked===false){
         navigate("/stop")
      }
      else { return <Navigate to={"*"}/>}
    }
    function HandLeChange(type, value) {
        if (type === 'text') {
            setAuthrion({ ...authorion, login_name: value })
        }
        if (type === 'password') {
            setAuthrion({ ...authorion, password: value })
        }
    }
    function HandleFocus(type, boelean) {
        if (type == 'text') {
            setInputFocus({ ...inputFocus, login: boelean })
        }
        if (type == 'password') {
            setInputFocus({ ...inputFocus, password: boelean })
    }}
    async function UserRoleChecked(){
        const data=await restokenFunction("GET","/users/me/",null,token)
        console.log(data)
        // if(data){
        //     navigate
        // }
        // else{
        //     navigate('/stop')
        // }
    }
    useEffect(()=>{
        UserRoleChecked()
    },[])
    return (
       <>{
        loading ?  <div className='dashboard-pages'>
        <div className="logo-top">
            <img  src={LogoTop} alt="logotip" />
        </div>
        <div className="Authorization">
            <div className="Authorization-box">
                <div className="yellow-line">
                    <span></span>
                </div>
                <form className='form'>
                    <div className="title-box">
                        <div >Кириш</div>
                        <div>Давом эттириш учун, киринг</div>
                    </div>
                    <div className="login-box">
                        <span
                            className={inputFocus.login ?
                                "login-line seeLine" : 'login-line '}></span>
                        <Input props={{
                            type: "text",
                            name: 'login', placeholder: 'Логин',
                            focus: inputFocus
                        }}
                            HandleChange={HandLeChange}
                            HandleFocus={HandleFocus}  //props send Input.js component function
                        />
                    </div>
                    <div className="password-box">
                        <span
                            className={inputFocus.password ?
                                "login-line seeLine" : 'login-line '}></span>
                        <Input props={{
                            type: inputFocus.seePassword ? "text" : 'password',
                            name: 'password',  //props send object 
                            placeholder: 'Пароль',
                            focus: inputFocus
                        }}
                            HandleChange={HandLeChange}
                            HandleFocus={HandleFocus} //function props send Input.js
                        />
                        <span onClick={() => setInputFocus({ ...inputFocus, seePassword: !inputFocus.seePassword })} className='eyes'>
                            {
                                inputFocus.seePassword ? <i className="fa fa-solid fa-eye-slash"></i>:<i className="fa fa-solid fa-eye"></i>
                            }
                        </span>
                    </div>
                    <button onClick={Checked} type='button'>Кириш</button>
                </form>
            </div>
        </div>
        <div className="logo-bottom">
            <img src={LogoTop} alt="logotip" />
        </div>
    </div>:<Loading/>
       }
       </>
    )
}
export default Dashboard