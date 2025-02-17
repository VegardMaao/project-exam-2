import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { Home } from "./home/home";

export const PageRouter =  () => {
    return (
    <Routes>
      <Route path="/" element= {<Layout />}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}