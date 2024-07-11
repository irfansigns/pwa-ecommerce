import { Outlet } from "react-router-dom"

export default function defaultLayout(){
    return(
        <div>
            Defaultlayout Page

            <Outlet />
        </div>
    )
}