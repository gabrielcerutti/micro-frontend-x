import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const HomePage = (props: { basePath: string | undefined }) => {
  return (
    <div>
      <header className="App-header">
        <nav>
          <ul className="App-nav">
            <li>
              <NavLink className="App-link" to="/page-one">
                Page One
              </NavLink>
            </li>
            <li>
              <NavLink className="App-link" to="/page-two">
                Page Two
              </NavLink>
            </li>
            <li>
              <NavLink className="App-link" to="/this-page-does-not-exist">
                Not Found
              </NavLink>
            </li>
          </ul>
        </nav>
        <img
          src={`${props.basePath !== '' ? props.basePath : ''}${logo}`}
          className="App-logo"
          alt="logo"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://martinfowler.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          And Software Fundamentals!
        </a>
        <p>
          This Microfrontend has its own host in{' '}
          <a
            className="App-link"
            href="https://gabrielcerutti.github.io/micro-frontend-x"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Pages
          </a>{' '}
          and can be independently developed and deployed.
          <br />
          Check out{' '}
          <a
            className="App-link"
            href="https://create-react-app.dev/docs/deployment"
            target="_blank"
            rel="noopener noreferrer"
          >
            this CRA document
          </a>{' '}
          for more deployment options.
        </p>
      </header>
    </div>
  );
};

export default HomePage;
