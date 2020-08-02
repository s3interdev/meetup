<template>
  <v-app>
    <!-- Navigation bar component -->
    <Navbar />

    <v-main>
      <!-- Renders matched component for given path -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/utility/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("loadMeetups");
  },
};
</script>
