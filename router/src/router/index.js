import { createWebHistory, createRouter } from "vue-router";
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'

const routes = [
    {
        path: "/",
        component: One,
    },
    {
        path: "/two",
        component: Two,
    },
    {
        path: "/three",
        component: Three,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;