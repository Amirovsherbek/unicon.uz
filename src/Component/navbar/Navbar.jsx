import Acount from '../../assets/acount.png'
import hamburger from '../../assets/hamburger.png'
function Navbar(){
    return (
        <>
        <div className="hamburger">
                    <img src={hamburger} alt="icon" />
                    <div>Фойдаланувчилар</div>
                </div>
                <div className="acount">
                    <div><img src={Acount} alt="acount" /></div>
                    <div className='username'>
                        <span>Fullname</span>
                        <span>superadmin</span>
                    </div>
                </div>
        </>
    )
}
export default Navbar;