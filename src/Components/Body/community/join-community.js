import classes from "./join-community.module.css";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";

const JoinCommunity = () => {
  return (
    <div className={classes.box}>
      <div className={classes["headline-box"]}>
        <h1 className={classes.h1}>Join DRCFS Community</h1>
      </div>
      <div className={classes["button-Box"]}>
        <a
          className={classes["linkedin-button"]}
          href="https://www.linkedin.com/company/drcfs"
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

export default JoinCommunity;
