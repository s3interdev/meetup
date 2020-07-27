import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Meetups from '@/views/meetup/Meetups';
import OrganizeMeetup from '@/components/meetup/OrganizeMeetup';
import Meetup from '@/components/meetup/Meetup';
import UserProfile from '@/views/user/UserProfile';
import Signup from '@/components/user/Signup';
import Signin from '@/components/user/Signin';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/meetups',
    name: 'meetups',
    component: Meetups,
  },
  {
    path: '/meetups/organize',
    name: 'organizemeetup',
    component: OrganizeMeetup,
  },
  {
    path: '/meetups/:id',
    name: 'meetup',
    component: Meetup,
    props: true,
  },
  {
    path: '/profile',
    name: 'userprofile',
    component: UserProfile,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
