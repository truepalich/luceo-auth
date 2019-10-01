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
            <v-card-title class="justify-center flex-column">Set Password</v-card-title>
            <v-card-text class="mt-4">

              <v-text-field
                v-model="pwd"
                :rules="pwdRules"
                label="New Password"
                type="password"
                outlined
                required
              ></v-text-field>

              <v-text-field
                v-model="pwdRepeat"
                :rules="pwdRules"
                label="New Password Repeat"
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
                  Set
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
      pwdRepeat: '',
      pwdRules: [
        v => !!v || 'Password is required',
      ],
    }),

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
