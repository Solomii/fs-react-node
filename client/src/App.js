import React from 'react';
// import Counter from './components/Counter';
// import Todo from './components/Todo';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import LogUpPage from './pages/LogUpPage';
import GroupForm from './components/GrouForm';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ol>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/registration">registration</NavLink>
            </li>
            <li>
              <NavLink to="/group-create">group create</NavLink>
            </li>
          </ol>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/registration" element={<LogUpPage />} />
          <Route path="/group-create" element={<GroupForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
