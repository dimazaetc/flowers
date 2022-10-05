import { ADD_INFO, ADD_SETTINGS, ADD_SIZE, ADD_SUBSCRIPTION } from "../types";

const initialState = {
  order: {
    size: "",
    subscription: {},
    flowers: [],
    wrapper: [],
    colors: [],
  },
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SIZE:
      const obj = { ...state.order, size: payload };
      return {
        ...state,
        order: obj,
      };
    case ADD_SUBSCRIPTION:
      const obj1 = { ...state.order, subscription: payload };
      return {
        ...state,
        order: obj1,
      };
    case ADD_SETTINGS:
      const obj2 = {
        ...state.order,
        flowers: payload.flowers,
        wrapper: payload.wrapper,
        colors: payload.wrapper,
      };

      return {
        ...state,
        order: obj2,
      };
    case ADD_INFO:
      return {
        ...state,
        order: payload,
      };

    default:
      return state;
  }
};
