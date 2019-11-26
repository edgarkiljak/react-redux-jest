import { MEMBERS_LOADED } from '../action-creators/action-types';

const initialState = {
  members: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MEMBERS_LOADED:
      return {
        ...state,
        members: action.payload
      };

    default:
      return state;
  }
};
