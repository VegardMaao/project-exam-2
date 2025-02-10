import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";

export const PageRouter =  () => {
    return (
    <Routes>
        <Route path="/" element= {<Layout />}>

        </Route>
    </Routes>
  )
}