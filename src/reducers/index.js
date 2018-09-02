import { combineReducers } from "redux";
import ChampionReducer from "./ChampionReducer";

export default combineReducers({
	champ: ChampionReducer
});
