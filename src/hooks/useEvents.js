import { useQuery } from "react-query";
import axios from "axios";

const fetchEvents = async () => {
  const res = await axios.get("https://webapiv2.drcfs.org/api/getinfo/events/");
  return res.data;
};

export const useEvents = () => {
  const {
    data: eventsData,
    isLoading,
    isError,
  } = useQuery(["events"], fetchEvents);

  return { eventsData, isLoading, isError };
};
