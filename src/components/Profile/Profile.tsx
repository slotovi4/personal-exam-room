import * as React from 'react';
import { IProfile } from '../../actions/interface';
import { cn } from '@bem-react/classname';
import {
  InputGroup,
  FormControl,
  ToggleButtonGroup,
  ToggleButton
} from 'react-bootstrap';
import './Profile.scss';

interface IProps {
  profile: IProfile;
}

class Profile extends React.Component<IProps> {
  public render() {
    const prof = cn('Profile');
    const { profile } = this.props;
    const { firstName, lastName, sex, email, emailConfirmed, phone } = profile;

    return profile && Object.keys(profile).length ? (
      <section className={prof()}>
        <h3 className={prof('Title')}>Профиль</h3>
        <div className={prof('Content')}>
          <InputGroup className={prof('Group')}>
            <InputGroup.Prepend>
              <InputGroup.Text>Имя и Фамилия</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Имя" value={firstName} disabled={true} />
            <FormControl
              placeholder="Фамилия"
              value={lastName}
              disabled={true}
            />
          </InputGroup>

          <InputGroup className={prof('Group')}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon1"
              value={email}
              disabled={true}
            />
            <InputGroup.Text>
              {emailConfirmed ? 'Подтвержден' : 'Не подтвержден'}
            </InputGroup.Text>
          </InputGroup>

          <InputGroup className={prof('Group')}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Телефон</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Телефон"
              aria-label="phone"
              aria-describedby="basic-addon1"
              value={phone}
              disabled={true}
            />
          </InputGroup>

          <InputGroup className={prof('Group')}>
            <InputGroup.Prepend>
              <InputGroup.Text>Пол</InputGroup.Text>
            </InputGroup.Prepend>

            <ToggleButtonGroup type="radio" name="options" defaultValue={sex}>
              <ToggleButton value="male">Муж</ToggleButton>
              <ToggleButton value="female">Жен</ToggleButton>
            </ToggleButtonGroup>
          </InputGroup>
        </div>
      </section>
    ) : null;
  }
}

export default Profile;
