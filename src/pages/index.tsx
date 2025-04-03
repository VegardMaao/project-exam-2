import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { Home } from "./home";
import { Venue } from "./venues";
import { ProfileRouter } from "./profile/index.tsx";
import { ErrorPage } from "./error-page/index.tsx";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="venues/:id" element={<Venue />} />
        <Route path="profile/*" element={<ProfileRouter />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
