import classes from "./OtherLinks.module.css";
import { NavLink } from "react-router-dom";

const navList = [
  {
    id: 1,
    name: "Community",
    link: "/community",
  },
  {
    id: 2,
    name: "Events",
    link: "/events",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "DataSets",
    link: "/datasets",
  },
];

const FooterOtherLinks = () => {
  const onClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.container}>
      <div>
        <h1>Other Links</h1>
      </div>
      <div className={classes.list}>
        {navList.map((item) => {
          return (
            <div key={item.id} className={classes["list-div"]}>
              <NavLink onClick={onClickHandler} to={item.link}>
                {item.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterOtherLinks;
