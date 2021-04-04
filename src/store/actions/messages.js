import axios from 'shared/axios';
import { fetchMessagesStart, fetchMessagesSuccess, fetchMessagesError } from '../reducers/messages';

const endpoint = '/messages';

// eslint-disable-next-line import/prefer-default-export
export function fetchMessages() {
  console.log('fetchMessages');
  return async function (dispatch) {
    dispatch(fetchMessagesStart());

    try {
      const response = await axios.get(endpoint);
      dispatch(fetchMessagesSuccess(response.data));
    } catch (error) {
      dispatch(fetchMessagesError(error));
    }
  };
}
