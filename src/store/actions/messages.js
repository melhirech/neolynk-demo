import axios from 'shared/axios';
import {
  fetchMessagesStart, fetchMessagesSuccess, fetchMessagesError,
  addMessageStart, addMessageSuccess, addMessageError,
} from '../reducers/messages';

const endpoint = '/messages';

export function fetchMessages() {
  return async function (dispatch) {
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
  return async function (dispatch) {
    dispatch(addMessageStart());

    try {
      const response = await axios.post(endpoint, message);
      console.log(response.data);
      dispatch(addMessageSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(addMessageError(error.message));
    }
  };
}
