function Select({name,data,className,HandleChange}){
    return (
        <select name={name} className={className} onChange={HandleChange}>
                 {
                    data.map(item=><option key={item.id} value={item.value}>{item.item}</option>)
                 }      
        </select>
    )
}
export default Select;