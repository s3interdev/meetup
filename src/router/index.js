import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/meetups',
    name: 'meetups',
    component: () => import('@/views/meetup/Meetups'),
  },
  {
    path: '/meetups/:id',
    name: 'meetup',
    component: () => import('@/components/meetup/Meetup'),
    props: true,
  },
  {
    path: '/organize-meetup',
    name: 'organizemeetup',
    component: () => import('@/components/meetup/OrganizeMeetup'),
  },
  {
    path: '/profile',
    name: 'userprofile',
    component: () => import('@/views/user/UserProfile'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/components/user/Signup'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/components/user/Signin'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
