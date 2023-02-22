export type StateType = {
  num: number;
};

export type ActionType = { type: "INCREMENT" } | { type: "DECREMENT" };

export const initialState = {
  num: 0,
};

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "INCREMENT":
      return {
        num: state.num + 1,
      };
    case "DECREMENT":
      return {
        num: state.num - 1,
      };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}
