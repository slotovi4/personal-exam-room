import * as React from 'react';

interface IProps {
  logoutUser: () => void;
}

const Home = ({ logoutUser }: IProps) => (
  <div>
    <span>home</span>
    <button onClick={logoutUser}>logout</button>
  </div>
);

export default Home;
