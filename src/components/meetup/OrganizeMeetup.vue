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
      <v-col>
        <!-- Organize meetup form -->
        <v-form ref="form" v-model="valid">
          <!-- Title field -->
          <v-row>
            <v-col cols="12" sm="6" offset-sm="3">
              <v-text-field
                label="Meetup Title"
                v-model="title"
                v-bind:rules="textRules"
                prepend-icon="group"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Location field -->
          <v-row>
            <v-col cols="12" sm="6" offset-sm="3">
              <v-text-field
                label="Meetup Location"
                v-model="location"
                v-bind:rules="textRules"
                prepend-icon="add_location"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Image field -->
          <v-row>
            <v-col cols="12" sm="6" offset-sm="3">
              <v-text-field
                label="Meetup Image"
                v-model="imageUrl"
                v-bind:rules="textRules"
                prepend-icon="insert_photo"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Image display -->
          <v-row>
            <v-col cols="12" sm="6" offset-sm="3">
              <v-img height="300" :src="imageUrl" contain></v-img>
            </v-col>
          </v-row>

          <!-- Description field -->
          <v-row>
            <v-col cols="12" sm="6" offset-sm="3">
              <v-textarea
                label="Meetup Descripton"
                v-model="description"
                v-bind:rules="textRules"
                prepend-icon="create"
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <!-- Buttons -->
          <v-row>
            <v-col cols="12" sm="6" offset-sm="3">
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
export default {
  name: "OrganizeMeetup",
  data() {
    return {
      valid: true,
      title: null,
      location: null,
      imageUrl: null,
      description: null,
      date: null,
      textRules: [
        (value) => !!value || "This is a required field.",
        (value) =>
          (value && value.length >= 5) ||
          "The text in this field needs to be more than 5 characters in length.",
      ],
    };
  },
  methods: {
    resetForm() {
      this.$refs.form.resetValidation();
      this.$refs.form.reset();
    },
    closeForm() {
      this.resetForm();
      this.$router.push({ name: "meetups" });
    },
    organizeMeetup() {
      if (this.$refs.form.validate()) {
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date(),
        };

        this.$store.dispatch("organizeMeetup", meetupData);
        this.closeForm();
      }
    },
  },
};
</script>