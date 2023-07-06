function Input({ props, HandleChange,HandleFocus }) {
  let value = props;
  return (
    <> 
      <input
        type={value.type}
        placeholder={value.placeholder}
        name={value.name}
        onFocus={()=>HandleFocus(value.type,true)}
        onBlur={()=>HandleFocus(value.type,false)}
        onChange={(e) => HandleChange(value.type,e.target.value)}
      /> 
    </>
  )
}
export default Input;