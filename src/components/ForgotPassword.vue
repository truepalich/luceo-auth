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
            <v-card-title class="justify-center">
              Password Recovery
            </v-card-title>
            <v-card-text class="mt-4">

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
                  @click="validate"
                  class="px-5 text-capitalize"
                >
                  Next
                </v-btn>
                &nbsp;<router-link :to="{ name: 'Login' }">Back to Login</router-link>
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
    name: "ForgotPassword",
    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          // this.snackbar = true
        }
      }
    },
  }
</script>

<style>

</style>
