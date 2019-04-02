import { profileTypes } from '../actions/types';
import { IProfile } from '../actions/interface';

export interface IAction {
  type?: 'GET_PROFILE';
  profile?: IProfile;
}

const { GET_PROFILE } = profileTypes;

export const initialState: IProfile | {} = {};

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
