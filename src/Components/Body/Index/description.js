import classes from "./description.module.css";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";

const description =
  "Make smart friends, learn from experts, and network like you’ve never done before. It’s a place to have fun, get amazing opportunities, and make new friends!";

const Description = () => {
  return (
    <div className={classes.descBox}>
      <div className={classes["headline-description"]}>
        <h1 className={classes.h1}>
          Nepal's most active student community with over{" "}
          <span className={classes.span}>2,000</span> members.
        </h1>
        <p className={classes.p}>{description}</p>
      </div>
      <div className={classes["button-Box"]}>
        <a
          className={classes["linkedin-button"]}
          href="https://www.linkedin.com/company/drcfs/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Join Linkedin</span>
          <FaLinkedinIn className={classes.icon} />
        </a>
        <a
          className={classes["discord-button"]}
          href="https://discord.com/invite/vEyZsJVS"
          target="_blank"
          rel="noreferrer"
        >
          <span>Join Discord</span>
          <FaDiscord className={classes.icon} />
        </a>
      </div>
    </div>
  );
};

export default Description;
