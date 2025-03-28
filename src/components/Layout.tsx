import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";

export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
