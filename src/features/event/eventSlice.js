import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvents: (state, action) => {
      const eventsList = [];

      const fetchedList = action.payload;

      // Reversing the array to get latest events first
      for (let i = fetchedList.length - 1; i >= 0; i--) {
        eventsList.push({
          title: fetchedList[i]["event title"],
          date: fetchedList[i]["event date_time"],
          location: fetchedList[i]["event location"],
          speaker: fetchedList[i]["event speaker"],
          eventImage: fetchedList[i]["event_pic"],
          regUrl: fetchedList[i]["registration_url"],
        });
      }
      state.events = eventsList;
    },
  },
});
export const { addEvents } = eventSlice.actions;
export default eventSlice.reducer;
