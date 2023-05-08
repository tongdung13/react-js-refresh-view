import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RefreshApp, { RefreshHome } from './Views/refesh-view';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RefreshHome />}>
        <Route index element={<RefreshHome />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
