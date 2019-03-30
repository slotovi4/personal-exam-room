import { profileTypes, USER_PROFILE } from '../actions/types';
import { IUser } from '../actions/interface';

interface IAction {
  type: 'GET_PROFILE' | 'GET_PROFILE_FAILURE';
  profile?: IUser;
}

interface IState {
  profile: IUser;
}

const { GET_PROFILE } = profileTypes;

const profile = localStorage[USER_PROFILE]
  ? JSON.parse(localStorage[USER_PROFILE])
  : {};

localStorage.removeItem(USER_PROFILE);

const initialState: IState = profile;

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};
