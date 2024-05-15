import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import SignIn from './SignInSide';
import SignUp from './SignUpSide';
import User from './User';
import Watchlist from './Watchlist';
//import Movie from './MoviePage';
import Movie from './Movie';

import SearchResults from './SearchResults';
import Apidata from './Movie';


function App() {
  return (
    <>       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/search" element={<SearchResults />} /> 
        <Route path="/movie/:title/:userID?" element={<Movie />} />
        {/* <Route path="/SignInSide" element={<SignIn />} /> */}
        {/* <Route path="/apidata/:title" element={<Apidata />} /> */}
        {/* <Route path="/apidata/:id" element={<Apidata />} /> */}

      </Routes>

    </>
  );
}

export default App;
