import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import classes from "./community.module.css";
import communityLogos from "./comunityImages";

const Community = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === communityLogos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? communityLogos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={classes.box}>
      <div className={classes["community-box"]}>
        <span className={classes.span}>Our Community Members Come From</span>
        <div className={classes.community}>
          <div className={classes.logoBox}>
            <img
              className={classes.img}
              src={communityLogos[currentImageIndex].imageUrl}
              alt={communityLogos[currentImageIndex].name}
            />
            <div className={classes.nameBox}>
              <p>{communityLogos[currentImageIndex].name}</p>
            </div>
          </div>
        </div>
        <div className={classes.arrows}>
          <BiChevronLeft
            onClick={handlePreviousImage}
            className={classes.arrow}
height={100}
          />
          <BiChevronRight
            onClick={handleNextImage}
            className={classes.arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
