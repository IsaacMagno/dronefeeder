import { createSlice } from "@reduxjs/toolkit";

export const droneSlice = createSlice({
  name: "Drones",
  initialState: {
    drones: [],
    entregas: [],
  },
  reducers: {
    setDrone(state, { payload }) {
      return { ...state, drones: payload };
    },
    setEntrega(state, { payload }) {
      return { ...state, entregas: payload };
    },
  },
});

export const { setDrone, setEntrega } = droneSlice.actions;

export default droneSlice.reducer;
