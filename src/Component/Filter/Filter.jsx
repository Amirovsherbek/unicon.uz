import '../../pages/user/user.css'
function Filter({Search,HandleChange}) {
    function SearchUser(){
    Search()
   }
    return (
        <div className='filter-input'>
            <div><i className=" fa fa-solid fa-magnifying-glass"></i></div>
            <input type="text" name='search' onChange={(e)=>HandleChange(e.target.value)}/>
            <button type='button' onClick={SearchUser}>Қидириш</button>
        </div> 
    )
}
export default Filter