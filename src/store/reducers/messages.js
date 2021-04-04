import * as actionTypes from '../actionTypes';

const DEFAULT_STATE = {
  data: null,
  error: null,
  loading: false,
};

// action creators
export function fetchMessagesStart() {
  return { type: actionTypes.FETCH_MESSAGES_START };
}

export function fetchMessagesSuccess(messages) {
  return { type: actionTypes.FETCH_MESSAGES_SUCCEED, payload: { messages } };
}

export function fetchMessagesError(error) {
  return { type: actionTypes.FETCH_MESSAGES_FAIL, payload: { error } };
}

// const addMessage = (message) => message;

const messagesReducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;

  switch (type) {
    case actionTypes.ADD_MESSAGE: {
      return {};
    }

    case actionTypes.FETCH_MESSAGES_START: {
      return { ...state, loading: true };
    }

    case actionTypes.FETCH_MESSAGES_SUCCEED: {
      return { ...state, loading: false, data: action.payload.messages };
    }

    case actionTypes.FETCH_MESSAGES_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }

    default:
      return state;
  }
};

export default messagesReducer;
