
import './App.css';
import { First } from './pages/first';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Second } from './pages/one-page';
import { Third } from './pages/two-page';
import { Fourth } from './pages/three-page';
import { Fifth } from './pages/four-page';


function App() {

  const routerConfig = createBrowserRouter (
    [
      {
        path:"/",
        element:<First />,
      },
      {
        path:"/second",
        element:<Second />,
      },
      {
        path:"/third",
        element:<Third />,
      },
      {
        path:"/fourth",
        element:<Fourth />,
      },
      {
        path:"/fifth",
        element:<Fifth />,
      }
    ]
    
  )

  return (
    <div className='App'>
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
