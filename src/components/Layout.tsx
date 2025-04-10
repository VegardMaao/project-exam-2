import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import { NewVenueIcon } from "./newVenue/newVenueIcon";

export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <NewVenueIcon />
      <Footer />
    </div>
  );
}
