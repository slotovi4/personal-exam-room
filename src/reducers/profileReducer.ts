import { profileTypes, USER_PROFILE } from '../actions/types';

interface IAction {
  type: 'GET_PROFILE' | 'GET_PROFILE_FAILURE';
  profile?: any;
}

interface IState {
  profile: any;
}

const { GET_PROFILE } = profileTypes;

const profile = localStorage[USER_PROFILE]
  ? JSON.parse(localStorage[USER_PROFILE])
  : undefined;

localStorage.removeItem(USER_PROFILE);

const initialState: IState = profile ? profile : { profile: {} };

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
