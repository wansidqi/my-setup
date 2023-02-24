import axios from "axios";
import { ACTION } from "./Action";

export const COUNTER_INCREMENT = () => {
  return {
    type: ACTION.COUNTER_INCREMENT,
  };
};

export const COUNTER_DECREMENT = () => {
  return {
    type: ACTION.COUNTER_DECREMENT,
  };
};

export const FETCH_USERS_SUCCESS = (payload: any) => {
  return {
    type: ACTION.FETCH_USERS_SUCCESS,
    payload: payload,
  };
};

export const FETCH_USERS_FAILURE = (payload: any) => {
  return {
    type: ACTION.FETCH_USERS_FAILURE,
    payload: payload,
  };
};

export const FETCH_USERS = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data;
      dispatch(FETCH_USERS_SUCCESS(data));
    } catch (e:any) {
      const error = e.message;
      dispatch(FETCH_USERS_FAILURE(error));
    }
  };
};
