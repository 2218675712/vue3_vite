import {createRouter, createWebHashHistory} from "vue-router";
import index from '../pages/index.vue'
const FirstDemo = () => import('/src/components/first_demo.vue')
const ComponentsTransfer = () => import('/src/components/Father.vue')

const routes = [
    {
        path: "/",
        component: index
    },
    {
        path:'/FirstDemo',
        component:FirstDemo
    },
    {
        path:'/ComponentsTransfer',
        component:ComponentsTransfer
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})