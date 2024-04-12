import classes from "./AboutContent.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useCommunityMembers } from "../../hooks/useCommunityMembers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMembers } from "../../features/community/communitySlice";

const AboutContent = () => {
  const { communityInfo, isLoading, isError } = useCommunityMembers();
  const community = useSelector((state) => state.community);
  const dispatch = useDispatch();

  useEffect(() => {
    if (communityInfo) {
      dispatch(addMembers(communityInfo));
    }
  }, [communityInfo, dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.headerBox}>
        <h1>
          The <span>team </span> that makes it all possible
        </h1>
      </div>
      <div className={classes.insideBox}>
        {isLoading ? (
          <div className={classes.spinner}></div>
        ) : (
          community.communityMembers.map((data) => {
            return (
              <div className={classes["member-Box"]} key={data.name}>
                <div className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src={data.profileImage}
                    alt={data.name}
                  />
                  <div className={classes.hoverBox}>
                    <a
                      className={classes.iconBox}
                      href={data.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <BsGithub />
                    </a>
                    <a
                      className={classes.iconBox}
                      href={data.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLinkedin />
                    </a>
                  </div>
                </div>
                <div className={classes.teamheaderBox}>
                  <span>{data.name}</span>
                </div>
                <div className={classes.roleBox}>
                  <span>{data.role}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AboutContent;
