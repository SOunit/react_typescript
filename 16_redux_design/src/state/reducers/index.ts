import { combineReducers } from "redux";
import cellsReducer from "./cellsReducer";

const reducers = combineReducers({
  cells: cellsReducer,
});

export default reducers;

// for useSelector hook
export type RootState = ReturnType<typeof reducers>;