import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const result = await fetch('https://api.spacexdata.com/v3/missions', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const response = result.json();
    return response;
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
