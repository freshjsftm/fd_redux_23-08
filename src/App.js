import React, { Suspense, lazy } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

const UsersPage = lazy(()=> import('./pages/usersPage'))
const TodoPage = lazy(()=> import('./pages/todoPage'))
const CountPage = lazy(()=> import('./pages/countPage'))

function App(props) {
  return (
    <>
     <BrowserRouter>
     <nav>
      <ul>
        <li>
          <NavLink to='/'>users</NavLink>
        </li>
        <li>
          <NavLink to='/todo'>todo</NavLink>
        </li>
        <li>
          <NavLink to='/count'>count</NavLink>
        </li>
      </ul>
     </nav>
     <Suspense fallback={'Loading...'}>
     <Routes>
      <Route path='/' element={<UsersPage />} />
      <Route path='/todo' element={<TodoPage />} />
      <Route path='/count' element={<CountPage />} />
     </Routes>
     </Suspense>
     </BrowserRouter>
    </>
  );
}

export default App;
