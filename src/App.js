import logo from './logo.svg';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
