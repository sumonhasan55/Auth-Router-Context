
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Service from './components/Services/Service';
import PrivateRoute from './Routes/PrivateRoute';
import Main from './utilitys/Main';


const router= createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/service',
        element:<PrivateRoute><Service></Service></PrivateRoute>
      },
    ]
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider 
      router={router}
      >

      </RouterProvider>
     
    </div>
  );
}

export default App;
