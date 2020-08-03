<template>
  <div>
    <!-- Application drawer -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="userIsAuthenticated" @click="onSignOut">
          <v-list-item-icon>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Sign Out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark>
      <!-- Humberger menu toggle -->
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- Application logo -->
      <v-toolbar-title class="text-uppercase">
        <router-link
          :to="{ name: 'home' }"
          tag="span"
          class="font-weight-light"
          style="cursor: pointer"
        >Meetup</router-link>
        <router-link :to="{ name: 'home' }" tag="span" style="cursor: pointer">/Tukutane</router-link>
      </v-toolbar-title>

      <!-- Push buttons to the right of toolbar -->
      <v-spacer></v-spacer>

      <!-- Toolbar items -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in items" :key="item.text" :to="item.link" text>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn v-if="userIsAuthenticated" @click="onSignOut">
          <v-icon left>exit_to_app</v-icon>Sign Out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    onSignOut() {
      this.$store.dispatch("signOut");
      this.$router.push({ name: "home" });
    },
  },
  computed: {
    items() {
      let items = [
        { icon: "face", title: "Sign Up", link: "/signup" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
      ];
      if (this.userIsAuthenticated) {
        items = [
          {
            icon: "supervisor_account",
            title: "View Meetups",
            link: "/meetups",
          },
          { icon: "room", title: "Organize Meetup", link: "/organize-meetup" },
          { icon: "person", title: "Profile", link: "/profile" },
        ];
      }
      return items;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
  },
};
</script>
