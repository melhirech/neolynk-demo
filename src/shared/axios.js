import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-sendgrid-demo-4b5ee.cloudfunctions.net/api',
});

export default instance;