import { useQuery } from "react-query";
import axios from "axios";

const fetchCommunityMembers = async () => {
  const res = await axios.get(
    "https://webapiv2.drcfs.org/api/getinfo/communitymembers/"
  );
  return res.data;
};

export const useCommunityMembers = () => {
  const {
    data: communityInfo,
    isLoading,
    isError,
  } = useQuery(["community-members"], fetchCommunityMembers);

  return { communityInfo, isLoading, isError };
};
