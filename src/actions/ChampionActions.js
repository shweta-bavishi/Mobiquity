import axios from "axios";
import {
	GET_LIST,
	GET_LIST_FAILURE,
	WINNER_LIST,
	WINNER_LIST_FAILURE
} from "./types";
const url = "http://ergast.com/api/f1/seasons.json?limit=11&offset=55";

export const get_list = () => {
	return dispatch => {
		axios
			.get(url)
			.then(response => success(dispatch, response))
			.catch(error => failure(dispatch, error));
	};
};

const success = (dispatch, response) => {
	dispatch({
		type: GET_LIST,
		payload: response
	});
};

const failure = (dispatch, error) => {
	dispatch({
		type: GET_LIST_FAILURE,
		payload: error
	});
};

export const get_winner_list = season => {
	return dispatch => {
		axios
			.get(`http://ergast.com/api/f1/${season}/results/1.json`)
			.then(response => winner_success(dispatch, response))
			.catch(error => winner_failure(dispatch, error));
	};
};

const winner_success = (dispatch, result) => {
	dispatch({
		type: WINNER_LIST,
		payload: result
	});
};

const winner_failure = (dispatch, error) => {
	dispatch({
		type: WINNER_LIST_FAILURE,
		payload: error
	});
};
