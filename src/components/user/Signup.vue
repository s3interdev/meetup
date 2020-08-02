<template>
  <v-container>
    <v-row v-if="error">
      <v-col cols="12" sm="6" offset-sm="3">
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-container>
            <!-- Form header section -->
            <v-row justify="center">
              <h3 class="text-uppercase">Sign Up</h3>
            </v-row>
            <!-- Signup form -->
            <v-form ref="signupForm" v-model="valid" lazy-validation>
              <!-- Email field -->
              <v-row>
                <v-col>
                  <v-text-field
                    label="Email Address"
                    v-model="email"
                    type="email"
                    :rules="[rules.required, rules.email]"
                    prepend-icon="email"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Password field -->
              <v-row>
                <v-col>
                  <v-text-field
                    label="Password"
                    v-model="password"
                    type="password"
                    :rules="[rules.required, rules.minimum]"
                    prepend-icon="lock"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Confirm password field -->
              <v-row>
                <v-col>
                  <v-text-field
                    label="Confirm Password"
                    v-model="confirmPassword"
                    type="password"
                    :rules="[rules.required, comparePasswords]"
                    prepend-icon="lock"
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Buttons -->
              <v-row>
                <v-col>
                  <v-btn class="info ma-3" @click="onSignUp" :disabled="loading" :loading="loading">
                    Sign Up
                    <template v-slot:loader>
                      <span class="custom-loader">
                        <v-icon light>cached</v-icon>
                      </span>
                    </template>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      valid: true,
      loader: null,
      email: null,
      password: null,
      confirmPassword: null,
      rules: {
        email: (value) =>
          /.+@.+\..+/.test(value) || "E-mail is not properly formatted.",
        minimum: (value) =>
          (value && value.length >= 8) ||
          "A minimum of 8 characters is required.",
        required: (value) => !!value || "This is a required field.",
      },
    };
  },
  methods: {
    onSignUp() {
      if (this.$refs.signupForm.validate()) {
        this.$store.dispatch("signUserUp", {
          email: this.email,
          password: this.password,
        });
      }
    },
    onDismissed() {
      this.reset();
      this.resetValidation();
      this.$store.dispatch("clearError");
    },
    reset() {
      this.$refs.signupForm.reset();
    },
    resetValidation() {
      this.$refs.signupForm.resetValidation();
    },
  },
  computed: {
    comparePasswords() {
      return () =>
        this.password === this.confirmPassword || "The password must match.";
    },
    user() {
      return this.$store.getters.user;
    },
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
