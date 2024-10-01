import { useStateContext } from "../context/ContextProvider";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestLayout(){
    const {token} = useStateContext();
    if(token){
       return <Navigate to='/'/>
    }

    return(
        <div>
            <div>
            Layout
            </div>
            <Outlet />
        </div>
    )
}