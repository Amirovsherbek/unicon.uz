import SaveIcon from '../../assets/success.png'
import Button from '../Button/Button';
import './Notifaction.css'
function BasicModal({setSuccess,setIsToogleModal}){
    function handeClick(){
    
      setIsToogleModal(prev=>!prev)
      setSuccess(prev=>!prev)
    }
  return(
        <div className="noticfacion-wrapper">
            <div className="noticfacion-img">
                <img src={SaveIcon} alt="save" />
            </div>
            <div className="noticfacion-title">
                <div>Маълумотлар қониқарли сақланди</div>
                <Button className={'noticfacion-title-button'} value={'Qaytish'} HandleClick={handeClick} type={"button"}/>
                
            </div>
        </div>
    )
}
export default BasicModal;