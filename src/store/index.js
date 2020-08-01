import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from '@/firebase/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        id: '7K7aaC4cpxyEw4NW',
        title: 'Meetup in New York',
        location: 'Times Square',
        date: new Date(),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo debitis maiores hic dignissimos voluptatem. totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Explicabo debitis maiores hic dignissimos voluptatem.totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.',
      },
      {
        id: 'WHfXpbuT2dNafmZ3',
        title: 'Meetup in Nairobi',
        location: 'Nairobi Garage, Kilimani',
        date: new Date(),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nairobi_skyline_P1000021.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo debitis maiores hic dignissimos voluptatem. totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Explicabo debitis maiores hic dignissimos voluptatem.totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.',
      },
      {
        id: 'aqwkN2PShdDhTwTw',
        title: 'Meetup in London',
        location: 'Tower Bridge',
        date: new Date(),
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/2/2c/Tower_of_London_viewed_from_the_River_Thames.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo debitis maiores hic dignissimos voluptatem. totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Explicabo debitis maiores hic dignissimos voluptatem.totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.',
      },
    ],
    user: null,
  },
  mutations: {
    organizeMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    organizeMeetup({ commit }, payload) {
      const meetup = {
        id: '2WdvbqNnmau7nfsK',
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
      };

      // Reachout to the database and persist the data
      commit('organizeMeetup', meetup);
    },
    signUserUp({ commit }, payload) {
      auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const signedUpUser = {
            id: user.uid,
            registeredMeetups: [],
          };
          commit('setUser', signedUpUser);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signUserIn({ commit }, payload) {
      auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const signedInUser = {
            id: user.uid,
            registeredMeetups: [],
          };
          commit('setUser', signedInUser);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId;
        });
      };
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    user(state) {
      return state.user;
    },
  },
});
