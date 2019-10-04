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
              <p class="justify-center text-center subtitle-2 grey--text text--lighten-2 mt-4" style="word-break: break-word">Please check your details and set your password<br/>to register with Luceo Sports</p>
            </v-card-title>
            <v-card-text class="mt-4">

              <p class="body-1 white--text mb-5">
                <span class="grey--text text--lighten-1">First name:</span> Alexei<br/>
                <span class="grey--text text--lighten-1">Last name:</span> Chizhmakov<br/>
                <span class="grey--text text--lighten-1">Email:</span> chizhmakov@itirra.com<br/>
              </p>

              <v-text-field
                v-model="pwd"
                :rules="pwdRules"
                placeholder="Set Password"
                type="password"
                required
                solo
                light
                class="mb-1"
              ></v-text-field>

              <v-text-field
                v-model="pwdConfirmation"
                :rules="pwdConfirmationRules"
                placeholder="Password Again"
                type="password"
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
                  Finish
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
    name: "SignUp",
    data: () => ({
      valid: true,
      pwd: '',
      pwdConfirmation: '',
      pwdRules: [
        v => !!v || 'Password is required',
      ],
    }),

    computed: {
      pwdConfirmationRules() {
        return [
          () => (this.pwd === this.pwdConfirmation) || 'Passwords must match',
          v => !!v || 'Password Confirmation is required'
        ];
      },
    },

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.$router.push({name: 'Profile'})
          // this.snackbar = true
        }
      }
    },
  }
</script>

<style scoped>

</style>
