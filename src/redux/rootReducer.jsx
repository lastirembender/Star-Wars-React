import { combineReducers } from "@reduxjs/toolkit";

import swapiReducer from "./slices/swapi/swapiSlice";
import globalReducer from "./slices/globalSlice";

const rootReducer = combineReducers({ swapi: swapiReducer });
export default rootReducer;
