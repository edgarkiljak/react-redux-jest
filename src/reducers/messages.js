import { MESSAGES_LOADED } from '../action-creators/action-types';

const initialState = {
  messages: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_LOADED:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
};
