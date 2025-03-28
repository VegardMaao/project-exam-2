import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerLinks } from "../dataObjects";
// @ts-ignore
import { headerStyles } from "../../styles/index.js";
// @ts-ignore
import { Logo } from "./Logo";

function Nav() {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <headerStyles.NavbarWrapper>
      <Link className="logoWrapper" to={"/"}>
        <Logo />
      </Link>
      <headerStyles.StyledHamburgerIcon
        onClick={() => setShowMenu(!showMenu)}
        dangerouslySetInnerHTML={{ __html: '<i class="fa-solid fa-bars"></i>' }}
      ></headerStyles.StyledHamburgerIcon>
      <headerStyles.NavLinkWrapper showOnMobile={showMenu}>
        {headerLinks.map((link) => (
          <headerStyles.StyledNavLink
            className={pathname === link.title ? "active" : ""}
            key={link.title}
            to={link.href}
          >
            {link.title}
          </headerStyles.StyledNavLink>
        ))}
      </headerStyles.NavLinkWrapper>
    </headerStyles.NavbarWrapper>
  );
}

export default function Header() {
  return (
    <header>
      <Nav />
    </header>
  );
}
