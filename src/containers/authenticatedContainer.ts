import UserIsAuthenticated from '../components/UserIsAuthenticated/UserIsAuthenticated';
import Home from '../components/Home/Home';

export const HomeAutnContainer = UserIsAuthenticated(Home);
