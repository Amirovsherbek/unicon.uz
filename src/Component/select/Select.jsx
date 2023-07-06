function Select({name,data,className}){
    return (
        <select name={name} className={className} >
                 {
                    data.map(item=><option key={item.id} value={item.value}>{item.value}</option>)
                 }      
        </select>
    )
}
export default Select;