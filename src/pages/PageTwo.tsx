import { NavLink } from 'react-router-dom';
import '../App.css';

const PageTwo = () => {
  return (
    <div>
      <header className="App-header App-header-pagetwo">
        <nav>
          <ul className="App-nav">
            <li>
              <NavLink className="App-link" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="App-header-number">Two</div>
        <p>
          Edit <code>src/pages/PageTwo.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://martinfowler.com/architecture/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Architecture!
        </a>
      </header>
    </div>
  );
};

export default PageTwo;
