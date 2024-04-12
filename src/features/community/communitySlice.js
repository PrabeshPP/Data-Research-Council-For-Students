import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communityMembers: [],
};

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    addMembers: (state, action) => {
      const fetchedList = action.payload;
      const newList = fetchedList.map((member) => ({
        name: member.name,
        role: member.role,
        github: member.github,
        profileImage: member.picture,
        linkedin: member.linkedin,
      }));
      state.communityMembers = newList;
    },
  },
});

export const { addMembers } = communitySlice.actions;

export default communitySlice.reducer;
