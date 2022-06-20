import logo from './logo.svg';
import './App.css';
import Login from './containers/Login'
import Registration from './containers/Registration'
import TodoList from './containers/Todo'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>

      </BrowserRouter>
   
  );
}

export default App;
