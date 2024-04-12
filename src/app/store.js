import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../features/event/eventSlice";
import communityReducer from "../features/community/communitySlice";

const store = configureStore({
  reducer: {
    community: communityReducer,
    event: eventReducer,
  },
});

export default store;
