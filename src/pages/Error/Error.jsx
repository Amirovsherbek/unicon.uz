import Navbar from "../../Component/navbar/Navbar"
import error from '../../assets/404.png'
import back from '../../assets/back.png'
import './error.css'
import { NavLink } from "react-router-dom"
function Error() {
  return (
    <div className="Error-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="status-code">
          <div className="status-code-img">
            <img src={error} alt="error" />
          </div>
          <div className="status-code-title">
            <span>404 - саҳифа топилмади</span>
            <span>Ушбу саҳифадаги маълумотлар топилмади, Интернет
              йоки бошқа сабабларга кўра веб-саҳифа топилмади. </span>
          </div>
          <div className="status-code-link">
               <NavLink to={'/'} className='status-code-navlink'>
                <span><img src={back} alt="back" /></span><span>Ортга қайтиш</span></NavLink>
          </div>
        </div>
    </div>
  )
}
export default Error