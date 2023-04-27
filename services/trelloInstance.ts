import axios from "axios";

export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token')
  }
}

const instance =  axios.create({
  baseURL: 'https://api.trello.com/1/',
  headers: {
    'Accept': 'application/json',
    'Authorization':
      `OAuth oauth_consumer_key=\"48f470fa9b65214b51401dff5897b3a3\", oauth_token=\"${getToken()}\"`
  },
});

export default instance;