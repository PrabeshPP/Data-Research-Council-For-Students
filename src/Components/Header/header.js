import classes from "./header.module.css";
import drcfsIcon from "../../Assets/DRC4S.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// , "Events", "About", "DatSets"

const headers = [
  {
    id: 1,
    headerName: "Community",
    path: "/community",
  },
  {
    id: 2,
    headerName: "Events",
    path: "/events",
  },
  {
    id: 3,
    headerName: "About",
    path: "/about",
  },
  // {
  //   id: 4,
  //   headerName: "Datasets",
  //   path: "/datasets",
  // },
  {
    id: 4,
    headerName: "Verify",
    path: "/verify",
  },
];

const Header = () => {
  const [clicked, setIsClicked] = useState(false);
  let width = window.innerWidth;

  const onClickHandler = () => {
    setIsClicked(!clicked);
  };

  //To check whether the user has clicked on the hamburger icon or not;

  const lineClass = clicked ? classes.change : classes.lineBox;

  //To Show the Nav List

  const navClass = clicked ? classes.nav1 : classes.navList;

  //To scroll to the top of the page
  const onNavClick = () => {
    window.scrollTo(0, 0);
    if (width <= 481) {
      setIsClicked(false);
    }
  };

  return (
    <nav className={classes.navBar}>
      <div className={classes.mobileBox}>
        <NavLink to="/" className={classes.imageIcon}>
          <img className={classes.img} src={drcfsIcon} alt="DRCFS Logo" />
        </NavLink>
        <div className={lineClass} onClick={onClickHandler}>
          <div className={classes.line}></div>
        </div>
      </div>

      <div className={navClass}>
        <ul className={classes.ulList}>
          {headers.map((header) => {
            return (
              <div className={classes.liBox} key={header.id}>
                <NavLink
                  onClick={onNavClick}
                  to={header.path}
                  className={classes.navLink}
                >
                  <li>{header.headerName}</li>
                  <div className={classes.underLine}></div>
                </NavLink>
              </div>
            );
          })}
          <button className={classes.button} disabled>
            Sign In
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
