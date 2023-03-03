import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

//layouts
import MovieLayout from '../Layouts/Movie.layout';

//pages
import MoviePage from '../Pages/Movie.page';

const MovieHOC = () => {
  return (
    <>
        <MovieLayout><MoviePage /></MovieLayout>
    </>
  )
}

export default MovieHOC;