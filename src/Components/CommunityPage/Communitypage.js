import React from "react";
import CommunityDescription from "./CommunityDescription";
import CommunityPerks from "./CommunityPerks";
import TechCommunity from "./TechCommunity";
import JoinCommunity from "../Body/community/join-community";

const CommunityPage = () => {
  return (
    <React.Fragment>
      <CommunityDescription />
      <CommunityPerks />
      <TechCommunity />
      <JoinCommunity />
    </React.Fragment>
  );
};

export default CommunityPage;
