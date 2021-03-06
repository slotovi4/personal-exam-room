import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Form, Button } from 'react-bootstrap';
import { save } from '../../actions/types';
import './Login.scss';

const { SAVED_PASS } = save;

interface IProps {
  loginUser: (phone: string, password: string) => void;
}

interface IState {
  phone: string;
  password: string;
  savePass: boolean;
}

class Login extends React.Component<IProps, IState> {
  public state = {
    phone: '',
    password: localStorage[SAVED_PASS] || '',
    savePass: false
  };

  public render() {
    const login = cn('Login');
    const { phone, password, savePass } = this.state;

    return (
      <article className={login()}>
        <header className={login('Header')}>
          <h3 className={login('Title')}>Вход</h3>
          <h5 className={login('Title', { pre: true })}>
            в личный кабинет и запись на квалификационные экзамены
          </h5>
        </header>
        <Form className={login('Form')} action="" onSubmit={this.submitForm}>
          <Form.Group>
            <Form.Label>Мобильный телефон</Form.Label>
            <div className={login('FieldContainer', { type: 'phone' })}>
              <Form.Control
                className={login('Field', { type: 'phone' })}
                type="tel"
                maxLength={10}
                pattern="^[0-9]{10}$"
                name="phone"
                value={phone}
                required={true}
                onChange={(e: any) => this.setState({ phone: e.target.value })}
              />
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Пароль</Form.Label>
            <div className={login('FieldContainer')}>
              <Form.Control
                className={login('Field')}
                type="password"
                name="password"
                required={true}
                value={password}
                onChange={(e: any) =>
                  this.setState({ password: e.target.value })
                }
              />
            </div>
            <span className={login('Text', { pass: true })}>
              Забыли пароль?
            </span>
          </Form.Group>

          <Form.Group>
            <Button variant="primary" type="submit" block={true}>
              Войти
            </Button>
          </Form.Group>

          <div className={login('FieldContainer', { type: 'save' })}>
            <Form.Check
              type="checkbox"
              label="Запомнить меня"
              onChange={() => this.setState({ savePass: !savePass })}
            />
          </div>
        </Form>

        <footer className={login('Footer')}>
          <span>
            Еще нет аккаунта? <b>Регистрация</b>
          </span>
        </footer>
      </article>
    );
  }

  private submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { phone, password, savePass } = this.state;
    const { loginUser } = this.props;

    if (savePass) {
      localStorage.removeItem(SAVED_PASS);
      localStorage.setItem(SAVED_PASS, password);
    }

    this.setState({ password: '' });

    loginUser(phone, password);
  };
}

export default Login;
