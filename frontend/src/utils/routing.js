import { createBrowserHistory } from 'history';

export const routePath = (path) => (path ? `/dashboard/${path}` : '/');
class Navigator {
    history = createBrowserHistory();

    push(path, state) {
        this.history.push(path, { ...state });
    }

    replace(path) {
        this.history.replace(path);
    }

    reload() {
        this.history.reload();
    }
}

export const ROUTE_LINKS = {
    // PUBLIC
    HOME: '/',
    ABOUT: '/about',
    CONTACT_US: '/contact_us',
    REGISTERATION: '/request_registration',
    SERVICE: '/service',
    NEWS: '/news',
    FAQ: '/faq',
    TERMS_CONDITION: '/terms-conditions',

    // DASHBOARD
    DASHBOARD: {},
};

export default new Navigator();
