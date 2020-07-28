<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col xs="5" sm="4" md="3">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
                  height="150"
                >
                </v-img>
              </v-col>
              <v-col xs="7" sm="8" md="9">
                <v-card-title class="dark--text">Meetup in New York</v-card-title>
                <v-card-subtitle class="subtitle-2">29th July 2020, Madison Square Garden</v-card-subtitle>
                <v-card-actions>
                  <v-btn class="success" text to="/meetups/1">
                    <v-icon left>arrow_forward</v-icon>
                    View Meetup
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
  name: 'Meetups',
  data() {
    return {};
  },
};
</script>
