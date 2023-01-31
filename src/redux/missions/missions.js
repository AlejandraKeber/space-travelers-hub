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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.fulfilled, (state, action) => {
        const missions = [];
        action.payload.forEach((mission) => {
          missions.push({
            missionId: mission.mission_id,
            missionName: mission.mission_name,
            missionDescription: mission.description,
          });
        });
        return { missions };
      });
  },
});

export default missionsSlice.reducer;
