import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Movies from '../views/Movies.vue';
import Shows from '../views/Shows.vue';
import Release from '../views/Release.vue';
import Search from '../views/Search.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/movies',
        name: 'Movies',
        views: Movies,
    },
    {
        path: '/shows',
        name: 'Shows',
        views: Shows,
    },
    {
        path: '/search',
        name: 'Search',
        views: Search,
    },
    {
        path: '/release',
        name: 'Release',
        views: Release,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;