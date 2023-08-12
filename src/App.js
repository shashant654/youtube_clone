import { Provider } from 'react-redux';
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element : <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element: <WatchPage/>
    }
  ]
}]);

function App() {
  return (

    <Provider store = {store}>
 <div>
     {/* <h1>Namaste </h1> */}
     <Head />
     <RouterProvider router = {appRouter} />
    </div>
    </Provider>
   
  );
}

export default App;


/*
Head
Body
sidebar
menuitems
buttonList
videoContainer
videocard
*/

// if vs code suggestion ni show kre tailwind k liye then PRESS ( CTRL + SPACE )