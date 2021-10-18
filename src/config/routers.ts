import IRouter from "../interfaces/route";
import AboutPage from "../pages/about";
import HomePage from "../pages/home";

const routers: IRouter[] = [
    {
        path: '/',
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