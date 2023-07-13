import Dashboard from "./pages/dashboard/dashboard";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/user/users";
import { createContext } from "react";
import Error from "./pages/Error/error";
import Stop from "./pages/stop/Stop";
import LayOut from "./Component/Outlet/Outlet";
import PrivateRoute from "./Component/Outlet/PrivateRoute";
export const UseContext = createContext();
function App() {
  const BaseUrl = "http://192.168.11.149:4500/api";
 function TokenFunc(){
      
 }
  return (
    <div className="container">
      <UseContext.Provider value={BaseUrl} >
        <Routes>
          <Route element={<LayOut />}>
            <Route index path="/" element={<PrivateRoute><UserPage/></PrivateRoute>}></Route>
            <Route path="/stop" element={<PrivateRoute><Stop/></PrivateRoute>}></Route>
            <Route path="/login" element={<Dashboard/>}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </UseContext.Provider>
    </div>
  );
}
export default App;
