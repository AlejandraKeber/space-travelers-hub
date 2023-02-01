import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const missions = await axios.get();
    return missions.data;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
  },
  reducers: {
    joiningMission(state, action) {
      const { id } = action.payload;
      const newState = { missions: [] };
      state.missions.forEach((mission) => {
        if (mission.id !== id) {
          newState.missions.push(mission);
        } else {
          newState.missions.push({ ...mission, reserved: true });
        }
      });
      return newState;
    },
    leavingMission(state, action) {
      const { id } = action.payload;
      const newState = { missions: [] };
      state.missions.forEach((mission) => {
        if (mission.id !== id) {
          newState.missions.push(mission);
        } else {
          newState.missions.push({ ...mission, reserved: false });
        }
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.fulfilled, (state, action) => {
        const missions = [];
        action.payload.forEach((mission) => {
          missions.push({
            id: mission.mission_id,
            name: mission.mission_name,
            description: mission.description,
            reserved: false,
          });
        });
        return { missions };
      });
  },
});

export const { joiningMission, leavingMission } = missionsSlice.actions;
export default missionsSlice.reducer;
