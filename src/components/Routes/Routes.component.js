//pages
import HomePage from "../../Pages/Home.page";
import MoviePage from "../../Pages/Movie.page";
import PlaysPage from "../../Pages/Plays.Page";
import SportsPage from "../../Pages/Sports.Page";

const routes = [
    {
        path: '/',
        element: <HomePage />
    },

    {
        path: '/Plays',
        element: <PlaysPage />
    },

    {
        path: '/sports',
        element: <SportsPage />
    }
];

export {routes};
