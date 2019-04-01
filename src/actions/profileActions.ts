import { profileTypes, alertTypes } from './types';
import { Dispatch } from 'react';
import { profileService } from '../services/profileService';

const { GET_PROFILE } = profileTypes;
const { ERROR } = alertTypes;

export const getUserProfile = () => (dispatch: Dispatch<object>) => {
  profileService
    .getProfile()
    .then(
      profile => dispatch({ type: GET_PROFILE, profile }),
      (message: string) => dispatch({ type: ERROR, message })
    );
};
