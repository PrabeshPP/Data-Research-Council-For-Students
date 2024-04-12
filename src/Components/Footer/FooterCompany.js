import { NavLink } from "react-router-dom";
import classes from "./FooterCompany.module.css";

const navList = [
  {
    id: 1,
    name: "About",
    path: "/about",
  },
  {
    id: 2,
    name: "Privacy Policy",
    path: "/privacy",
  },
  {
    id: 3,
    name: "Terms & Conditions",
    path: "/terms",
  },
];

const FooterCompany = () => {
  const onClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.container}>
      <div>
        <h1>Community</h1>
      </div>
      <div className={classes.list}>
        {navList.map((item) => {
          return (
            <div key={item.id} className={classes["list-div"]}>
              <NavLink
                className={classes.navLink}
                to={item.path}
                onClick={onClickHandler}
              >
                <p>{item.name}</p>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterCompany;
