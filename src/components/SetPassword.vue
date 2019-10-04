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
              <span>Set Password</span>
              <p class="justify-center text-center subtitle-2 grey--text text--lighten-2 mt-4" style="word-break: break-word">Password change for account: test@test.com</p>
            </v-card-title>
            <v-card-text class="mt-4">

              <v-text-field
                v-model="pwd"
                :rules="pwdRules"
                placeholder="New Password"
                type="password"
                required
                solo
                light
                class="mb-1"
              ></v-text-field>

              <v-text-field
                v-model="pwdConfirmation"
                :rules="pwdConfirmationRules"
                placeholder="New Password Again"
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
                  Save
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
    name: "SetPassword",
    data: () => ({
      valid: true,
      pwd: '',
      pwdConfirmation: '',
      pwdRules: [
        v => !!v || 'New Password is required',
      ],
  }),

  computed: {
    pwdConfirmationRules() {
      return [
        () => (this.pwd === this.pwdConfirmation) || 'Passwords must match',
        v => !!v || 'New Password Confirmation is required'
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
