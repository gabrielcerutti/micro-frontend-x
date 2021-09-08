import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import NotFound from './pages/NotFound';

function App(props: { basePath: string; host: string }) {
  console.log(`BasePath is ${props.basePath}`);
  console.log(`Host is ${props.host}`);
  let basePath = '';
  if (props.basePath !== '' && props.host !== '') {
    basePath = `${props.host}`;
  }
  return (
    <div className="Micro-App">
      <Routes basename={props.basePath}>
        <Route path="page-one" element={<PageOne></PageOne>} />
        <Route path="page-two" element={<PageTwo></PageTwo>} />
        <Route path="/" element={<HomePage basePath={basePath}></HomePage>} />
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
