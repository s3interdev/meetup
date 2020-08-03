<template>
  <v-container>
    <!-- Call to action buttons -->
    <v-row>
      <v-col>
        <v-row justify="center">
          <v-btn class="info ma-1" :to="{ name: 'meetups' }" depressed large>Explore Meetups</v-btn>
          <v-btn class="info ma-1" :to="{ name: 'organizemeetup' }" depressed large>Organize Meetups</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <!-- Circular progress bar -->
    <v-row>
      <v-col>
        <v-row justify="center">
          <v-progress-circular indeterminate :size="89" :width="8" color="warning" v-if="loading"></v-progress-circular>
        </v-row>
      </v-col>
    </v-row>

    <!-- Carousel -->
    <v-row v-if="!loading">
      <v-col>
        <v-carousel style="cursor: pointer">
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            reverse-transition="fade-transition"
            transition="fade-transition"
            @click="onSelectMeetup(meetup.id)"
          >
            <div class="title">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Call to action message -->
    <v-row>
      <v-col>
        <v-row justify="center">
          <p>Join any one of our awesome meetups!</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    onSelectMeetup(id) {
      this.$router.push({ name: "meetup", params: { id: id } });
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  margin: 0;
  margin-right: -50%;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 21px;
  padding: 21px;
}
</style>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>