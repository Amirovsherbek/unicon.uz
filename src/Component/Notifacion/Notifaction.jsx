import SaveIcon from '../../assets/success.png'
import './Notifaction.css'
function Notifacion(){
    return(
        <div className="noticfacion-wrapper">
            <div className="noticfacion-img">
                <img src={SaveIcon} alt="save" />
            </div>
            <div className="noticfacion-title">
                <div>Маълумотлар қониқарли сақланди</div>
            </div>
        </div>
    )
}
export default Notifacion