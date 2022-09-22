import {createStore} from "redux";
import { rootReducers } from "./reducer/Index";

const store = createStore(rootReducers)
export default store;