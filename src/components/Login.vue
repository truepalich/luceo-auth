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
            <v-card-title class="justify-center">Login</v-card-title>
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

              <v-text-field
                v-model="pwd"
                :rules="pwdRules"
                placeholder="Password"
                type="password"
                solo
                light
                required
                class="mb-1"
              ></v-text-field>

              <!--<v-checkbox-->
                <!--v-model="checkbox"-->
                <!--label="Remember me"-->
                <!--color="selectedColors"-->
                <!--class="mt-0"-->
              <!--&gt;</v-checkbox>-->


              <div class="d-block">
                <v-btn
                  @click="validate"
                  color="formBut1"
                  class="px-5 text-capitalize"
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
      pwd: '',
      pwdRules: [
        v => !!v || 'Password is required',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.$router.push({name: 'Profile'})
          // this.snackbar = true
        }
      },
    },
  }
</script>


<style>

</style>
