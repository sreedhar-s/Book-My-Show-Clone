import React from "react";
import axios from "axios";

//HOC 
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//components
import { Route, Routes } from "react-router-dom";

//Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<DefaultHOC />} />
        <Route path="/movie/:id" element={<MovieHOC />} />
      </Routes>
    </>
  )
}

export default App;




