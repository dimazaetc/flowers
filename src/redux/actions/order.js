import { ADD_SETTINGS, ADD_SIZE, ADD_SUBSCRIPTION } from "../types";

export const addSize = (size) => {
  return {
    type: ADD_SIZE,
    payload: size,
  };
};

export const addSubscription = (obj) => {
  return {
    type: ADD_SUBSCRIPTION,
    payload: obj,
  };
};

export const addSettings = (obj) => {
  return {
    type: ADD_SETTINGS,
    payload: obj,
  };
};
