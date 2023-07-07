function Button({className, value,HandleClick,icon}){
    function OnClick(){
        HandleClick()
    }
    return (
        <button onClick={()=>HandleClick(prev=>!prev)} className={className}>
            <span style={{width:'24px',height:"24px",color:"rgba(0, 71, 135, 1)"}}>{icon}</span>
           {value}
        </button>
    )
}
export default Button;