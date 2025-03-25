import { Route, Routes } from "react-router-dom";
//@ts-ignore
import { LoginOrRegister } from "./loginOrRegister";
import { Profile } from "./profile";
import useLoggedInStore from "../../zustandStores/loggedInStore";

export function ProfileRouter() {
    const { loggedIn } = useLoggedInStore();
    if (loggedIn) {
        return (
            <Routes>
                <Route path="/" element={< Profile />}/>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="/" element={< LoginOrRegister />}/>
            </Routes>
        )
    }
}