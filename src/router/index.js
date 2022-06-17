import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '@/views/tabs/home.vue'
import Video from '@/views/courses/video/detail.vue'
import Login from '@/views/login/login.vue'
const routes = [{
        path: '/',
        component: Home
    },
    {
        name: 'CourseDetail',
        path: '/course/video/detail',
        meta: {
            title: '课程详情'
        },
        component: Video
    },
    {
        name: 'Login',
        path: '/login',
        meta: {
            title: '登录页'
        },
        component: Login
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router