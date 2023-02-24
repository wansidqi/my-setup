import { ACTION } from "../Action";
import { initialCounterState } from "../State";

export const counterReducer = (
  state = initialCounterState,
  action: any
) => {
  switch (action.type) {
    case ACTION.COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case ACTION.COUNTER_DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    case ACTION.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case ACTION.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
