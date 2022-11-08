import { configureStore } from "@reduxjs/toolkit";
import DronesReducer from "../reducers/droneSlice";

export default configureStore({
  reducer: {
    drones: DronesReducer,
  },
});
