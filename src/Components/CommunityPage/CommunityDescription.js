import classes from "./CommunityDescription.module.css";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";

const caption =
  "Data Research Council For Students(DRCFS) is an student-led community based in Nepal, established to spread digital literacy and Data Science knowledge all over the country. A community backed by industrial tech experts. Our community has passionate students who come from unique backgrounds.";

const CommunityDescription = () => {
  return (
    <div className={classes.container}>
      <div className={classes["join-Us-Box"]}>
        <div className={classes.headerBox}>
          <h1 className={classes.h1}>
            Join Nepal's Largest{" "}
            <span className={classes.span}>Data Science</span> Community
          </h1>
        </div>
        <div className={classes.captionBox}>
          <p>{caption}</p>
        </div>
        <div className={classes.buttonBox}>
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
    </div>
  );
};

export default CommunityDescription;
