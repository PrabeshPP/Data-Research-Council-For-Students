import classes from "./CommunityPerks.module.css";

//Must be fetched from backend
const demoList = [
  {
    id: 1,
    title: "Letter Of Recommendation(LOR)",
    perksList: [
      "You will get a strong letter of recommendation.",
      "If eligible,you will get a job referral from our tech experts.",
      "You will be awarded a certificate for your work.",
    ],
  },
  {
    id: 2,
    title: "Resume Builder",
    perksList: [
      "You will be given plenty of resources to refine your resume.",
      "Our experts would help you in building your resume.",
      "You will have new skills to add to your resume.",
    ],
  },
  {
    id: 3,
    title: "Better Job Prospects",
    perksList: [
      "You will have a chance to grow your network with industry experts.",
      "You will have hands-on experience in software development and data science.",
      "You will gain leadership ,communication and management skills.",
    ],
  },
];

const CommunityPerks = () => {
  return (
    <div className={classes.container}>
      <div className={classes["header-Box"]}>
        <h1>
          Perks Of Joining <span className={classes.span}>DRCFS</span>
        </h1>
      </div>
      <div className={classes["perksList-Box"]}>
        {demoList.map((item) => {
          return (
            <div key={item.id} className={classes.perkBox}>
              <div className={classes.headerBox}>
                <h2>{item.title}</h2>
              </div>
              <div className={classes.listBox}>
                {item.perksList.map((perkItem) => {
                  return <li key={perkItem.length}>{perkItem}</li>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommunityPerks;
