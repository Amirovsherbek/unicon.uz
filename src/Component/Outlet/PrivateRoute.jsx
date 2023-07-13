// import { Navigate } from "react-router-dom";
import { Navigate } from "react-router-dom"
import { UseContext } from "../../App";
import { useContext } from "react";
function PrivateRoute({ children }) {
  const {}=useContext(UseContext)
  let checkout=localStorage.getItem('_token')
  if (false) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default PrivateRoute;
// function  PrivateRoute({children,_token}){
//   console.log("da")
//   let token=localStorage.getItem("_token")
//   console.log(token==_token ? "togri":"xato")
//   if(token!==_token){
//     return <Navigate to={'/login'}/>
//   }
//   return children;
// }
// export default PrivateRoute











// import { Navigate } from "react-router-dom";
// function PrivateRoute({ children }) {
//     let token=false
//     if(!token){
//         return <Navigate to={'/auth'}/>
//     }      
//   return children;
// }

// export default PrivateRoute;
