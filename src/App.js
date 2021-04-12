import React from 'react';
import SideNav from "./client/sidenav";
import TopNav from "./client/topnav";
import Footer from "./client/footer";
import Routes from "./client/routes";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  return (

    <div>
      <TopNav/>
      <SideNav/>
      <Routes/>
      <Footer/>
    </div>

  );
}

export default App;
