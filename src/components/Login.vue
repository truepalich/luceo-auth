<template>
  <v-content>
    <v-container fluid class="fill-height">

      <v-flex class="form-type-1">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          autocomplete="off"
        >
          <v-card class="mx-auto px-2 py-5">
            <div class="d-flex justify-center mb-3 pt-6">
              <img src="../assets/LuceoSports-Logo.png" alt="Luceo" width="150px">
            </div>
            <v-card-title class="justify-center">Login</v-card-title>
            <v-card-text class="mt-4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                outlined
                required
              ></v-text-field>

              <v-text-field
                v-model="pwd"
                :rules="pwdRules"
                label="Password"
                type="password"
                outlined
                required
              ></v-text-field>

              <div class="d-block">
                <v-btn
                  color="formBut1"
                  class="px-5 text-capitalize"
                  @click="validate"
                >
                  Login
                </v-btn>
                &nbsp;<router-link :to="{ name: 'ForgotPassword' }">Forgot password?</router-link>

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
    name: "Login",
    data: () => ({
      valid: true,
      // name: '',
      // nameRules: [
      //   v => !!v || 'Name is required',
      //   v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      // ],
      pwd: '',
      pwdRules: [
        v => !!v || 'Password is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
    }),

    // created: function () {
    //   setTimeout(function () {
    //     this.email = '';
    //     this.pwd = '';
    //   }, 100)
    // },

    mounted: function () {
      this.email = '';
      this.pwd = '';
    },

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          // this.snackbar = true
        }
      }
    },
  }
</script>

<style scoped>

</style>
