import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/about',
        name: 'About me',
        component: () => import('./views/About.vue')
    },
    {
        path: '/experience',
        name: 'Experience',
        component: () => import('./views/Experience.vue')
    },
    {
        path: '/certificates',
        name: 'Certificates',
        component: () => import('./views/Certificates.vue')
    },
    {
        path: '/apps-pages',
        name: 'Apps & Pages',
        component: () => import('./views/AppsPages.vue')
    },
    {
        path: '/pictures',
        name: 'Pictures',
        component: () => import('./views/Pictures.vue')
    },
    {
        path: '/videos',
        name: 'Videos',
        component: () => import('./views/Videos.vue')
    },
    {
        path: '/downloads',
        name: 'Downloads',
        component: () => import('./views/Downloads.vue')
    },
    {
        path: '/socials-contact',
        name: 'Socials & Contact',
        component: () => import('./views/SocialsContact.vue')
    },
    {
        path: '/:notFound(.*)',
        name: 'Not Found',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    //@ts-ignore
    scrollBehavior(to, from, savedPosition){
        return savedPosition ? savedPosition : { left: 0, top: 0 };
    },
    routes
});

export default router