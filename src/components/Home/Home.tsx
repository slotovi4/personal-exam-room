import * as React from 'react';

// components
import Profile from '../Profile/Profile';

interface IProps {
  logoutUser: () => void;
  getUserProfile: () => void;
}

interface IState {
  data: {} | null;
}

class Home extends React.Component<IProps, IState> {
  public state = {
    data: null
  };

  public componentWillMount() {
    // this.props.getUserProfile();
  }

  public render() {
    const { logoutUser } = this.props;
    const { data } = this.state;

    return (
      <div>
        <span>home</span>
        <button onClick={logoutUser}>logout</button>
        <Profile data={data} />
      </div>
    );
  }
}

export default Home;
