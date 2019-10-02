<template>
  <v-content>
    <v-container fluid class="fill-height">

      <v-flex class="form-type-1">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >

          <v-card class="mx-auto px-2 py-5 form-page">
            <div class="d-flex justify-center mb-3 pt-6">
              <img src="../assets/LuceoSports-Logo.png" alt="Luceo" width="150px">
            </div>

            <v-card-title class="justify-center flex-column">
              <span>Signup</span>
              <v-subheader class="justify-center">Step 1. Add private information</v-subheader>
            </v-card-title>
            <v-card-text class="mt-4">

              <v-text-field
                v-model="firstName"
                :rules="firstNameRules"
                placeholder="First Name"
                required
                solo
                light
                class="mb-1"
              ></v-text-field>

              <v-text-field
                v-model="lastName"
                :rules="lastNameRules"
                placeholder="Last Name"
                required
                solo
                light
                class="mb-1"
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                placeholder="Email"
                required
                solo
                light
                class="mb-1"
              ></v-text-field>

              <div class="d-block">
                <v-btn
                  color="formBut1"
                  class="px-5 text-capitalize"
                  @click="validate"
                >
                  Next
                </v-btn>
              </div>

            </v-card-text>
          </v-card>
        </v-form>
      </v-flex>

    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: "SignUpStep1",
    data: () => ({
      valid: true,
      firstName: '',
      firstNameRules: [
        v => !!v || 'First Name is required',
        // v => (v && v.length <= 2) || 'First Name must be less than 2 characters',
      ],
      lastName: '',
      lastNameRules: [
        v => !!v || 'Last Name is required',
        // v => (v && v.length <= 2) || 'First Name must be less than 2 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.$router.push({name: 'SignUpStep2'})
          // this.snackbar = true
        }
      }
    },
  }
</script>

<style scoped>

</style>
