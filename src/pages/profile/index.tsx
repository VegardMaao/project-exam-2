import { Route, Routes } from "react-router-dom";
import { LoginOrRegister } from "./loginOrRegister/loginOrRegister";

export function ProfileRouter() {
    return ( 
        <Routes>
            <Route path="/" element={< LoginOrRegister />} />
        </Routes>
    )
}