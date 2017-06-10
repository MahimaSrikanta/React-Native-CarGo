import { LOGIN_PROFILE } from '../actions/type';

const INITIAL_STATE = {
  username: '',
  email: '',
  picture_url: '',
  token: '',
  social_provider: '',
  user_id: '',
<<<<<<< HEAD
  id: '',
=======
>>>>>>> 4e37afbb72d50e34f270fe82775e5e253c10764b
};

function loginProfile(state = INITIAL_STATE, { type, data }) {
  //console.log('this is the data in the reducer', data)
  switch (type) {
    case LOGIN_PROFILE:
      return {
        ...state,
        username: data.username,
        email: data.email,
        picture_url: data.picture_url,
        token: data.token,
        social_provider: data.social_provider,
        user_id: data.user_id,
        id: data.id,
      };
    default:
      return state;
  }
}


export default loginProfile;
