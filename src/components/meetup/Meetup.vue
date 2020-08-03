<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="dark--text">{{ meetup.title }}</v-card-title>
          <v-img :src="meetup.imageUrl" height="400"></v-img>
          <v-card-text>
            <p class="subtitle-1">{{ meetup.date | date }}</p>
            <p class="subtitle-1">{{ meetup.location }}</p>
            <p class="body-1">{{ meetup.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="info" text>Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Meetup",
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    },
  },
};
</script>
