import * as React from 'react';

interface IProps {
  logoutUser: () => void;
}

class Home extends React.Component<IProps> {
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
