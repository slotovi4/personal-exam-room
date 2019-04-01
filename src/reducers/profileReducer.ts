import { profileTypes } from '../actions/types';
import { IUser } from '../actions/interface';

interface IAction {
  type: 'GET_PROFILE';
  profile?: IUser;
}

const { GET_PROFILE } = profileTypes;

const initialState: IUser | {} = {};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        ...action.profile
      };
    default:
      return state;
  }
};
