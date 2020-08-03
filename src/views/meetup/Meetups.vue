<template>
  <v-container>
    <v-row v-for="meetup in meetups" :key="meetup.id">
      <v-col>
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col xs="5" sm="4" md="3">
                <v-img :src="meetup.imageUrl" height="150"></v-img>
              </v-col>
              <v-col xs="7" sm="8" md="9">
                <v-card-title class="dark--text">{{ meetup.title }}</v-card-title>
                <v-card-subtitle class="subtitle-2">{{ meetup.date | date }}, {{ meetup.location }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn class="info" text :to="{ name: 'meetup', params: { id: meetup.id } }">
                    <v-icon left>arrow_forward</v-icon>View Meetup
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Meetups",
  data() {
    return {};
  },
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    },
  },
};
</script>
