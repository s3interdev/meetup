import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/index';
import Home from '@/views/Home';
import Meetups from '@/views/meetup/Meetups';
import Meetup from '@/components/meetup/Meetup';
import OrganizeMeetup from '@/components/meetup/OrganizeMeetup';
import UserProfile from '@/views/user/UserProfile';
import Signup from '@/components/user/Signup';
import Signin from '@/components/user/Signin';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/meetups',
      name: 'meetups',
      component: Meetups,
    },
    {
      path: '/meetups/:id',
      name: 'meetup',
      component: Meetup,
      props: true,
    },
    {
      path: '/organize-meetup',
      name: 'organizemeetup',
      component: OrganizeMeetup,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/profile',
      name: 'userprofile',
      component: UserProfile,
      meta: {
        requiresAuth: true,
      },
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
  ],
});

router.beforeEach((to, from, next) => {
  // Check to see if route requires auth
  if (to.matched.some((req) => req.meta.requiresAuth)) {
    // Check the authentication state of user
    let user = store.getters.user;

    if (user) {
      // User has signed in, proceed to route
      next();
    } else {
      // User has not signed in, redirect to signin page
      next({ name: 'signin' });
    }
  } else {
    next();
  }
});

export default router;
