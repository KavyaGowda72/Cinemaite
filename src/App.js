
import { createBrowserRouter, Outlet } from "react-router-dom";

import Browse from "./Components/Browse";

import appStore from "./Utils/appStrore";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Movies from './Components/Movies/Movies'
import TvShows from './Components/Tv Shows/TvShows'
import NewAndPopular from './Components/New & Popular/NewAndPopular'
import { Provider } from "react-redux";
import Footer from "./Components/Footer";
function App() {
  return (
    <div >
    <Provider store={appStore}>
      <Header/>
      <Outlet/>
      <Footer/>
    </Provider>
    </div>
   
  );
}

export const appRoute=createBrowserRouter([
  {
    path:'/',
    element:<App/>,

    children:[
      {
        path:'/',
        element:<Browse/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/movies',
        element:<Movies/>
      },
      {
        path:'/tvshows',
        element:<TvShows/>
      },
      {
       path:'/new&popular',
       element:<NewAndPopular/> 
      }

    ]
  }
  
])

export default App;
