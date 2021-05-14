import { CREATE_AUDIO } from "../Actions/actionTypes";

const initialState = {
  audio: null,
};

export default function audioReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_AUDIO:
      return { ...state, audio: action.track };
    default:
      return state;
  }
}
