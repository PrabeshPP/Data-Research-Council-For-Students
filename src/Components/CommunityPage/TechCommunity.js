import classes from "./TechCommunity.module.css";
import { SiTensorflow, SiFlutter, SiReact, SiPython } from "react-icons/si";

const technologiesStack = [
  {
    id: 1,
    communityName: "AI/ML",
    imageURL: SiTensorflow,
    description:
      "Machine Learning Practitioner,engineer who have years of experiences.",
  },
  {
    id: 2,
    communityName: "Data Science",
    imageURL: SiPython,
    description:
      "Industry experts who have years of experience in data science.",
  },
  {
    id: 3,
    communityName: "Mobile Dev",
    imageURL: SiFlutter,
    description:
      "Energetic and enthusiastic Flutter and React Native developers.",
  },
  {
    id: 4,
    communityName: "Web Dev",
    imageURL: SiReact,
    description:
      "Experienced and skilled web developers who are leading in industry.",
  },
];

const TechCommunity = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headerBox}>
        <h1>
          <span>Tech</span> Community
        </h1>
      </div>
      <div className={classes["technologies-Box"]}>
        {technologiesStack.map((techItem) => {
          return (
            <div className={classes.techBox} key={techItem.id}>
              <div className={classes.header}>
                <h1>{techItem.communityName}</h1>
              </div>
              <div className={classes.iconBox}>
                <techItem.imageURL />
              </div>
              <div className={classes.descBox}>
                <p>{techItem.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechCommunity;
