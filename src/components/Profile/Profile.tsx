import * as React from 'react';
import { IProfile } from '../../actions/interface';

interface IProps {
  profile: IProfile;
}

const Profile = ({ profile }: IProps) => {
  const {
    firstName,
    lastName,
    sex,
    birthDate,
    email,
    emailConfirmed,
    phone
  } = profile;

  return (
    <section>
      <span>profile</span>
      <span>{firstName}</span>
      <span>{lastName}</span>
      <span>{sex}</span>
      <span>{birthDate}</span>
      <span>{email}</span>
      <span>{emailConfirmed}</span>
      <span>{phone}</span>
    </section>
  );
};

export default Profile;
