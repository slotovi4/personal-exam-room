import { profileTypes } from './types';
import { Dispatch } from 'react';
import { profileService } from '../services/profileService';

const { GET_PROFILE, GET_PROFILE_FAILURE } = profileTypes;

export const getUserProfile = () => (dispatch: Dispatch<object>) => {
  profileService
    .getProfile()
    .then(
      profile => dispatch({ type: GET_PROFILE, profile }),
      (error: string) => dispatch({ type: GET_PROFILE_FAILURE, error })
    );
};
