import { NavLink } from 'react-router-dom';
import '../App.css';

const NotFound = () => {
  document.title = 'Main SPA | NotFound';
  return (
    <div>
      <header className="App-header">
        <h3>Oops! Sorry, Page Not Found</h3>
        <h4>
          You should probably go back to the{' '}
          <NavLink className="App-link" to="/">
            Microfrontend Home
          </NavLink>
        </h4>
      </header>
    </div>
  );
};

export default NotFound;
