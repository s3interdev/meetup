<template>
  <v-app>
    <Navbar />
    <v-main>
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
};
</script>
