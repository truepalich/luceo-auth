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
            <v-card-title class="justify-center flex-column">
              <span>Signup</span>
              <v-subheader class="justify-center">Step 3. Please, set your password</v-subheader>
            </v-card-title>
            <v-card-text class="mt-4">

              <v-text-field
                v-model="pwd"
                :rules="pwdRules"
                label="Password"
                type="password"
                outlined
                required
              ></v-text-field>

              <v-text-field
                v-model="pwdRepeat"
                :rules="pwdRules"
                label="Password Repeat"
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
  // import Vue from 'vue'
  // import  * as VeeValidate from 'vee-validate'
  // Vue.use(VeeValidate)

  export default {
    // $_veeValidate: {
    //   validator: 'new',
    // },
    name: "SignUpStep3",
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

    // methods: {
    //   submit () {
    //     this.$validator.validateAll()
    //       .then(result => {
    //         console.log(result)
    //       })
    //   },
    //   clear () {
    //     this.pass = ''
    //     this.pass2 = ''
    //   }
    // }
  }
</script>

<style scoped>

</style>
