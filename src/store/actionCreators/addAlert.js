import { ADD_ALERT, REMOVE_ALERT } from "../actions/default";
import { v4 as uuidv4 } from 'uuid';

export const addAlert = (message, type, timeout = 4000) => {
  const id = uuidv4();

  // setTimeout(() => dispatch({type: REMOVE_ALERT, payload: {message, type, id}}), timeout);
  return {type: ADD_ALERT, payload: {message, type, id}}
}

export const removeAlert = (id) => {
  return {type: REMOVE_ALERT, ...id}
}
