import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/list/:num",
        component: () => import('./components/Detail.vue'),
        children: [
            {
                path: 'author',
                component: () => import('./components/Author.vue')
            },
            {
                path: 'comment',
                component: () => import('./components/Comment.vue')
            }
        ]
    },
    {
        path: "/list",
        component: () => import('./components/List.vue')
    },
    {
        path: "/",
        component: () => import('./components/Home.vue'),
    },
    {
        path: "/:404",
        component: () => import('./components/Error.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 