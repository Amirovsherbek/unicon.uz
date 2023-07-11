import './NotFound.css'
function NotFound({message}){
    return (
        <div className="NotFound">
         
            <div>
                {message}
            </div>
        </div>
    )
}
export default NotFound;