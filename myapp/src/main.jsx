import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Todo from './pages/Todo/Todo.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Todo />,
      },
      {
        path: 'todo',
        element: <Todo />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />, 
      },
      {
        path: "*",
        element: (<div>No Match Found</div>),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>,
);
