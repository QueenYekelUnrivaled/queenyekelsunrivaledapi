import Home from '../components/pages/Home';
import TermsConditions from '../components/pages/TermsConditions';
import About from '../components/pages/About';
import ContactUs from '../components/pages/ContactUs';
import RequestRegistration from '../components/pages/RequestRegistration';
import Service from '../components/pages/Service';
import News from '../components/pages/News';
import FAQ from '../components/pages/FAQ';

import { ROUTE_LINKS } from '../utils/routing';

const routes = () => [
    {
        path: ROUTE_LINKS.HOME,
        exact: true,
        component: Home,
    },
    {
        path: ROUTE_LINKS.ABOUT,
        exact: true,
        component: About,
    },
    {
        path: ROUTE_LINKS.CONTACT_US,
        exact: true,
        component: ContactUs,
    },
    {
        path: ROUTE_LINKS.REGISTERATION,
        exact: true,
        component: RequestRegistration,
    },
    {
        path: ROUTE_LINKS.SERVICE,
        exact: true,
        component: Service,
    },
    {
        path: ROUTE_LINKS.NEWS,
        exact: true,
        component: News,
    },
    {
        path: ROUTE_LINKS.FAQ,
        exact: true,
        component: FAQ,
    },
    {
        path: ROUTE_LINKS.TERMS_CONDITION,
        exact: true,
        component: TermsConditions,
    },
];

export default routes;
