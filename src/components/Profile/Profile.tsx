import * as React from 'react';
import { IProfile } from '../../actions/interface';

interface IProps {
  profile: IProfile;
  getUserProfile: () => void;
}

class Profile extends React.Component<IProps> {
  public componentWillMount() {
    const { profile } = this.props;

    console.log(profile);

    if (!Object.keys(profile).length) {
      this.props.getUserProfile();
    }
  }

  public render() {
    const {
      firstName,
      lastName,
      sex,
      birthDate,
      email,
      emailConfirmed,
      phone
    } = this.props.profile;

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
  }
}

export default Profile;
