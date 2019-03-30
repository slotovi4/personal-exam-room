import * as React from 'react';

interface IProps {
  loginUser: (phone: string, password: string) => void;
}

interface IState {
  phone: string;
  password: string;
}

class Login extends React.Component<IProps, IState> {
  public render() {
    return (
      <div>
        <form action="" onSubmit={this.submitForm}>
          <input
            type="tel"
            name="phone"
            placeholder="tel"
            required={true}
            pattern="^[0-9]{10}$"
            onChange={e => this.setState({ phone: e.target.value })}
          />
          <input
            type="password"
            name="password"
            placeholder="pass"
            required={true}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">login</button>
        </form>
      </div>
    );
  }

  private submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { phone, password } = this.state;
    const { loginUser } = this.props;

    loginUser(phone, password);
  };
}

export default Login;
