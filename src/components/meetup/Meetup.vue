<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="dark--text">Meetup in New York</v-card-title>
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
            height="400"
          ></v-img>
          <v-card-text>
            <p class="subtitle-1">29th July 2020</p>
            <p class="subtitle-1">Madison Square Garden</p>
            <p class="body-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorem, tempora ab consectetur quasi
              amet! Enim magnam impedit quae, adipisci culpa facere blanditiis sapiente molestiae natus consequatur
              officia, labore quam.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="success" text>Register for Meetup</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Meetup',
  data() {
    return {};
  },
};
</script>
