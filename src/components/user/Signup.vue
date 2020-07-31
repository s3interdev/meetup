<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-container>
            <v-row justify="center">
              <h3 class="text-uppercase">Sign Up</h3>
            </v-row>
            <!-- Signup form -->
            <v-form>
              <!-- Email field -->
              <v-row>
                <v-col>
                  <v-text-field
                    label="Email Address"
                    v-model="email"
                    type="email"
                    :rules="emailRules"
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
                    :rules="textRules"
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
                    :rules="[comparePasswords]"
                    prepend-icon="lock"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Buttons -->
              <v-row>
                <v-col>
                  <v-btn class="info ma-3" @click="signUp">Sign Up</v-btn>
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
      email: null,
      password: null,
      confirmPassword: null,
      textRules: [(value) => !!value || "This is a required field."],
      emailRules: [
        (value) => !!value || "E-mail is a required field.",
        (value) =>
          /.+@.+\..+/.test(value) || "E-mail is not properly formatted.",
      ],
    };
  },
  methods: {
    signUp() {
      console.log({
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });
    },
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "The passwords do not match."
        : "";
    },
  },
};
</script>