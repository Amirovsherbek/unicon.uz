function Button({className, value,HandleClick,icon,type,disabled}){
    function OnClick(){
        HandleClick()
    }
    return (
        <button 
        type={type} 
        className={className}
        onClick={OnClick} >
            <span style={{width:'24px',height:"24px",color:"rgba(0, 71, 135, 1)"}}>{icon}</span>
           {value}
        </button>
    )
}
export default Button;