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
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="primary" dark>
      <!-- Humberger menu toggle -->
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- Application logo -->
      <v-toolbar-title class="text-uppercase">
        <router-link to="/" tag="span" class="font-weight-light" style="cursor: pointer">Meetup</router-link>
        <router-link to="/" tag="span" style="cursor: pointer">/Tukutane</router-link>
      </v-toolbar-title>

      <!-- Push buttons to the right of toolbar -->
      <v-spacer></v-spacer>

      <!-- Toolbar items -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in items" :key="item.text" :to="item.link" text>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
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
      items: [
        { icon: "supervisor_account", title: "View Meetups", link: "/meetups" },
        { icon: "room", title: "Organize Meetup", link: "/meetups/organize" },
        { icon: "person", title: "Profile", link: "/profile" },
        { icon: "face", title: "Sign Up", link: "/signup" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
      ],
    };
  },
};
</script>