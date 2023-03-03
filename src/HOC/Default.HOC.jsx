import React from 'react';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

//Layouts
import DefaultLayout from '../Layouts/Default.layout';

//Pages
import HomePage from '../Pages/Home.page';
import PlaysPage from '../Pages/Plays.Page';
import SportsPage from '../Pages/Sports.Page';


const DefaultHOC = () => {
    return (
        <>
          <Routes>
            <Route path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
            <Route path="/sports" element={<DefaultLayout><SportsPage /></DefaultLayout>} />
            <Route path="/plays" element={<DefaultLayout><PlaysPage /></DefaultLayout>} />
          </Routes>

        </> 
    );
};

export default DefaultHOC;

