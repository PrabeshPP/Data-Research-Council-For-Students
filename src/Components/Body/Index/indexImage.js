import Image from "../../../Assets/index.svg";
import classes from "./indexImage.module.css";
const IndexImage = () => {
  return (
    <div className={classes.imgBox}>
      <img src={Image} className={classes.img} alt="social_connection" />
    </div>
  );
};

export default IndexImage;
