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
              <img :src="brand.logo" :alt="brand.name">
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
                <router-link :to="{ name: 'ForgotPassword' }">Forgot password?</router-link>
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
      brand: {},
      logo: '',
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

    created: function () {
      this.brand = this.$store.getters.getBrandBySlug(this.$route.params.brandSlug);
      if (this.brand == undefined) {
        this.brand = this.$store.getters.getBrandBySlug('luceo-sports');
      }
    },

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
