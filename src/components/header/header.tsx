/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerLinks } from "../dataObjects";
// @ts-ignore
import { headerStyles as S } from "../../styles/index.js";
// @ts-ignore
import { Logo } from "./logo";
import useLoggedInStore from "../../zustandStores/loggedInStore.js";

function Nav() {
  const { loggedIn, logOut, getName } = useLoggedInStore();
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const loggedInUserName = getName();

  const LogOutBtn = () => {
    if (loggedIn) {
      return (
        <S.StyledNavLink className="inactive" onClick={logOut}>
          Log Out
        </S.StyledNavLink>
      );
    } else {
      return <S.StyledNavLink to={"/profile"}>Log In</S.StyledNavLink>;
    }
  };

  return (
    <S.NavbarWrapper>
      <Link className="logoWrapper" to={"/"}>
        <Logo />
      </Link>
      <S.StyledHamburgerIcon
        onClick={() => setShowMenu(!showMenu)}
        dangerouslySetInnerHTML={{ __html: '<i class="fa-solid fa-bars"></i>' }}
      ></S.StyledHamburgerIcon>
      <S.NavLinkWrapper showOnMobile={showMenu}>
        {headerLinks.map((link) => (
          <S.StyledNavLink
            display={
              link.title === "Venue" && !pathname.includes("venues")
                ? "none"
                : "inline"
            }
            className={pathname === link.title ? "active" : ""}
            key={link.title}
            to={
              link.title === "Profile"
                ? `${link.href}/${loggedInUserName}`
                : link.href
            }
          >
            {link.title}
          </S.StyledNavLink>
        ))}
        <LogOutBtn />
      </S.NavLinkWrapper>
    </S.NavbarWrapper>
  );
}

export default function Header() {
  return (
    <header>
      <Nav />
    </header>
  );
}
