import './App.scss';

import Header from './components/Header';
import Rodape from './components/Rodape';
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <>
     
      <Header/>
      <Outlet/>
      <Rodape/>
    </>
  )
}


