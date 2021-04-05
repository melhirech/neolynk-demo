import axios from 'shared/axios';
import {
  fetchMessagesStart, fetchMessagesSuccess, fetchMessagesError,
  addMessageStart, addMessageSuccess, addMessageError,
} from '../reducers/messages';

const endpoint = '/messages';

export function fetchMessages() {
  return async function fetchMessagesAsync(dispatch) {
    dispatch(fetchMessagesStart());

    try {
      const response = await axios.get(endpoint);
      dispatch(fetchMessagesSuccess(response.data));
    } catch (error) {
      dispatch(fetchMessagesError(error.message));
    }
  };
}

export function addMessage(message) {
  return async function addMessageAssync(dispatch) {
    dispatch(addMessageStart());

    try {
      const response = await axios.post(endpoint, message);
      dispatch(addMessageSuccess(response.data));
    } catch (error) {
      dispatch(addMessageError(error.message));
    }
  };
}
