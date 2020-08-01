<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row justify="center">
          <h3 class="text-uppercase">Organize Meetup</h3>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2">
        <!-- Organize meetup form -->
        <v-form ref="organizemeetupForm" v-model="valid" lazy-validation>
          <!-- Title field -->
          <v-row>
            <v-col>
              <v-text-field
                label="Meetup Title"
                v-model="title"
                :rules="[rules.required, rules.minimum]"
                prepend-icon="group"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Location field -->
          <v-row>
            <v-col>
              <v-text-field
                label="Meetup Location"
                v-model="location"
                :rules="[rules.required, rules.minimum]"
                prepend-icon="add_location"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Image field -->
          <v-row>
            <v-col>
              <v-text-field
                label="Meetup Image"
                v-model="imageUrl"
                :rules="[rules.required]"
                prepend-icon="insert_photo"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Image display -->
          <v-row>
            <v-col>
              <v-img height="300" :src="imageUrl" contain></v-img>
            </v-col>
          </v-row>

          <!-- Description field -->
          <v-row>
            <v-col>
              <v-textarea
                label="Meetup Descripton"
                v-model="description"
                :rules="[rules.required, rules.minimum]"
                prepend-icon="create"
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <!-- Date field -->
          <v-row>
            <v-col>
              <v-menu
                ref="dateMenu"
                v-model="dateMenu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Meetup Date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="[rules.required]"
                    prepend-icon="event"
                    required
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="dateMenu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dateMenu.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>

          <!-- Time field -->
          <v-row>
            <v-col>
              <v-menu
                ref="timeMenu"
                v-model="timeMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time"
                    label="Meetup Time"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="[rules.required]"
                    prepend-icon="access_time"
                    required
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="timeMenu"
                  v-model="time"
                  full-width
                  format="24hr"
                  @click:minute="$refs.timeMenu.save(time)"
                ></v-time-picker>
              </v-menu>
            </v-col>
          </v-row>

          <!-- Buttons -->
          <v-row>
            <v-col>
              <v-btn class="info ma-3" @click="organizeMeetup">Organize Meetup</v-btn>
              <v-btn class="secondary ma-3" @click="closeForm">Cancel</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";

export default {
  name: "OrganizeMeetup",
  data() {
    return {
      valid: true,
      dateMenu: false,
      timeMenu: false,
      title: null,
      location: null,
      imageUrl: null,
      description: null,
      date: null,
      time: null,
      rules: {
        minimum: (value) =>
          (value && value.length >= 8) ||
          "A minimum of 8 characters is required.",
        required: (value) => !!value || "This is a required field.",
      },
    };
  },
  methods: {
    resetForm() {
      this.$refs.organizemeetupForm.resetValidation();
      this.$refs.organizemeetupForm.reset();
    },
    closeForm() {
      this.resetForm();
      this.$router.push({ name: "meetups" });
    },
    organizeMeetup() {
      if (this.$refs.organizemeetupForm.validate()) {
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: this.concatenatedDateTime,
        };

        this.$store.dispatch("organizeMeetup", meetupData);
        this.closeForm();
      }
    },
  },
  computed: {
    concatenatedDateTime() {
      const computedDateTime = moment(
        this.date + " " + this.time,
        "DD-MM-YYYY HH:mm:ss"
      ).format();

      return computedDateTime;
    },
  },
};
</script>
