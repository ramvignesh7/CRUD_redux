import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AddUser from './component/AddUser';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './component/UpdateUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<AddUser />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
    </div>
  );
}

export default App;
