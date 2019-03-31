import * as React from 'react';

interface IProps {
  logoutUser: () => void;
  getUserProfile: () => void;
}

class Home extends React.Component<IProps> {
  public componentWillMount() {
    this.props.getUserProfile();
  }

  public render() {
    const { logoutUser } = this.props;

    return (
      <div>
        <span>home</span>
        <button onClick={logoutUser}>logout</button>
      </div>
    );
  }
}

export default Home;
