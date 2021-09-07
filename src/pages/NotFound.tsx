import { NavLink } from 'react-router-dom';
import '../App.css';

const NotFound = () => {
  document.title = 'Main SPA | NotFound';
  return (
    <div>
      <header className="App-header">
        <h2>Oops! Sorry, Page Not Found</h2>
        <h3>
          You should probably go back to the{' '}
          <NavLink className="App-link" to="/">
            Micro-Frontend Home
          </NavLink>
        </h3>
      </header>
    </div>
  );
};

export default NotFound;
