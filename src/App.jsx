import Dashboard from "./pages/dashboard/dashboard";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/user/users";
import { createContext } from "react";
import Error from "./pages/Error/error";
import Stop from "./pages/stop/Stop";
import {useState} from 'react'
export const UseContext = createContext();
function App() {
  const BaseUrl = "http://192.168.11.149:4500/api";
  const token = "dasd";
  const [role,setRole]=useState('')
  function Token(parm){
      setRole(parm)
  }
  return (
    <div className="container">
      <UseContext.Provider  value={{BaseUrl,Token}}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
          {token && (
            <>  
              {role== "Super Admin" && (
                <>
                  <Route path={"/user"} element={<UserPage />} />
                </>
              )}
              {localStorage.getItem('role')== "Super Admin" && (
                <>
                  <Route path={"/user"} element={<UserPage />} />
                </>
              )}
              {role == "Operator" && (
                <>
                  <Route path="/stop" element={<Stop />} />
                </>
              )}
              {localStorage.getItem('role')== "Operator" && (
                <>
                  <Route path={"/stop"} element={<Stop />} />
                </>
              )}
            </>
          )}
        </Routes>
      </UseContext.Provider>
    </div>
  );
}
export default App;

// <Routes>
//         <Route path="/" element={<AuthPage />} />
//         <Route path="/state" element={<StatePage />} />
//         <Route path="/error" element={<ErrorPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//         {token && (
//           <>
//             {role === "ADMINISTRATOR" && (
//               <>
//                 <Route path={"/requests"} element={<AdminPage />} />
//                 <Route path={"/organizations"} element={<OrganizationPage />} />
//                 <Route path={"/users"} element={<UsersPage />} />
//               </>
//             )}
//             {role === "OPERATOR" && (
//               <>
//                 <Route path={"/main"} element={<MainPage />} />
//                 <Route path={"/create"} element={<CreateRequestPage />} />
//               </>
//             )}
//           </>
//         )}
// //       </Routes>
