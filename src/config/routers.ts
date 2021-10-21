import IRouter from "../interfaces/route";
import LandingPage from "../pages/landing/landing";
import HomePage from "../pages/home/home";
import AboutPage from "../pages/about/about";

const routers: IRouter[] = [
    {
        path: '/',
        name: 'Landing page',
        component: LandingPage,
        exact: true
    },
    {
        path: '/home',
        name: 'Home page',
        component: HomePage,
        exact: true
    },
    {
        path: '/about',
        name: 'About page',
        component: AboutPage,
        exact: true
    },
    {
        path: '/about/:number',
        name: 'About page',
        component: AboutPage,
        exact: true
    }
]

export default routers;