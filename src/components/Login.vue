<template>
  <v-content>
    <v-container fluid class="fill-height">

      <v-flex class="form-type-1">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card class="mx-auto px-2 py-5 login-page">
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

              <v-checkbox
                v-model="checkbox"
                label="Remember me"
                color="selectedColors"
                class="mt-0"
              ></v-checkbox>


              <div class="d-block">
                <v-btn
                  @click="validate"
                  color="formBut1"
                  class="px-5 text-capitalize"
                  style="color: #ffffff;"
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
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          console.log(this.$refs.form)
          // this.snackbar = true
        }
      },
    },

  }
</script>



<style>
  .login-page .v-text-field .v-input__slot {
    padding: 0px 1px !important;
    border: 1px solid #fff;
    margin-bottom: 4px;
  }

  .login-page .v-text-field input {
    text-indent: 10px;
  }

  .login-page .v-input input {
    min-height: 45px;
    border-radius: 3px;
  }

  .v-application .error--text.v-input.v-text-field .v-input__slot {
    border: 1px solid #ff5252;
  }

  /*input, input[type="password"], input[type="search"] {*/
    /*cursor: auto !important;*/
    /*background: yellow;*/
    /*background-color: yellow;*/
  /*}*/

  /*input:internal-autofill-selected {*/
    /*background-color: yellow !important;*/
    /*background-image: none !important;*/
    /*color: rgb(0, 0, 0) !important;*/
  /*}*/
</style>
