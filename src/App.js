import Grid from '@mui/material/Grid';
import './App.css';
import Signup from "./components/signup";
import { Login } from "./components/login";
import Home from "./container/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import React from 'react';
import { Provider } from "react-redux";
import store from "./redux";
import { Shop } from "./components/shop";
import ContactCard from "./components/contact";
import { CategoryPage } from './category';

const App = () => {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <>
              <Route path='/' element={<Home />} />
              <Route path='/:category' element={<CategoryPage />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/contact' element={<ContactCard />} />
              <Route path='/sign_up' element={
                <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center">
                  <Login />
                  <Signup />
                </Grid>} />
            </>
          </Routes>
        </Router>
      </Provider>
    </>
  );
};


export default App;
