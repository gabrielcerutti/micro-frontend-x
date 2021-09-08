import { NavLink } from 'react-router-dom';
import '../App.css';

const PageOne = () => {
  return (
    <div>
      <header className="App-header App-header-pageone">
        <nav>
          <ul className="App-nav">
            <li>
              <NavLink className="App-link" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="App-header-number">One</div>
        <p>
          Edit <code>src/pages/PageOne.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://martinfowler.com/agile.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Agile!
        </a>
      </header>
    </div>
  );
};

export default PageOne;
