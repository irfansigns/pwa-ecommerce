import { Outlet } from "react-router-dom"

export default function guestLayout(){
    return(
        <div>
            GuestLayout Page
            <Outlet />
        </div>
    )
}