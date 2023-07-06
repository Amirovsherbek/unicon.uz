import '../Error/error.css'
import Navbar from "../../Component/navbar/Navbar"
import stop from '../../assets/stop.png'
import back from '../../assets/back.png'
import { NavLink } from "react-router-dom"
function Stop() {
  return (
    <div className="Error-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="status-code">
          <div className="status-code-img">
            <img src={stop} alt="error" />
          </div>
          <div className="status-code-title">
            <span>Тақиқланган</span>
            <span>Сизда тизимга киришга ҳуқуқ ёқ </span>
          </div>
          <div className="status-code-link">
               <NavLink to={'/'} className='status-code-navlink'>
                <span><img src={back} alt="back" /></span><span>Ортга қайтиш</span></NavLink>
          </div>
        </div>
    </div>
  )
}
export default Stop