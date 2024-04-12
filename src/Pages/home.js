import React from "react";
import Index from "../Components/Body/Index";
import Community from "../Components/Body/community/community";
import Events from "../Components/Body/events/events";

//this is just for the experiment purpose
import JoinCommunity from "../Components/Body/community/join-community";

const HomePage = () => {
  return (
    <React.Fragment>
      <Index />
      <Community />
      <Events />
      <JoinCommunity />
    </React.Fragment>
  );
};

export default HomePage;
