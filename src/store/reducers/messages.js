import * as actionTypes from '../actionTypes';

const DEFAULT_STATE = {
  data: [],
  error: null,
  fetchingMessages: false,
  addingMessage: false,
};

// action creators
// ________________

// fetch messages

export function fetchMessagesStart() {
  return { type: actionTypes.FETCH_MESSAGES_START };
}

export function fetchMessagesSuccess(messages) {
  return { type: actionTypes.FETCH_MESSAGES_SUCCEED, payload: { messages } };
}

export function fetchMessagesError(error) {
  return { type: actionTypes.FETCH_MESSAGES_FAIL, payload: { error } };
}

// add message

export function addMessageStart() {
  return { type: actionTypes.ADD_MESSAGE_START };
}
export function addMessageSuccess(newMessage) {
  return { type: actionTypes.ADD_MESSAGE_SUCCEED, payload: { newMessage } };
}
export function addMessageError(error) {
  return { type: actionTypes.ADD_MESSAGE_FAIL, payload: { error } };
}

// messages reducer

const messagesReducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;

  switch (type) {
    case actionTypes.ADD_MESSAGE_START: {
      return { ...state, addingMessage: true };
    }

    case actionTypes.ADD_MESSAGE_SUCCEED: {
      return {
        ...state,
        addingMessage: false,
        error: null,
        // append new added message to existing data
        data: [action.payload.newMessage, ...state.data],
      };
    }

    case actionTypes.ADD_MESSAGE_FAIL: {
      return { ...state, addingMessage: false, error: action.payload.error };
    }

    case actionTypes.FETCH_MESSAGES_START: {
      return { ...state, fetchingMessages: true };
    }

    case actionTypes.FETCH_MESSAGES_SUCCEED: {
      return {
        ...state,
        fetchingMessages: false,
        error: null,
        data: action.payload.messages,
      };
    }

    case actionTypes.FETCH_MESSAGES_FAIL: {
      return { ...state, fetchingMessages: false, error: action.payload.error };
    }

    default:
      return state;
  }
};

export default messagesReducer;
