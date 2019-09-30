<template>
  <v-content>
    <v-container fluid class="fill-height">

      <v-flex class="form-type-1">
        <!--<v-form-->
          <!--ref="form"-->
          <!--v-model="valid"-->
          <!--lazy-validation-->
          <!--autocomplete="off"-->
        <!--&gt;-->
          <!--<div class="d-flex justify-center mb-3">-->
            <!--<img src="../assets/LuceoSports-Logo.png" alt="Luceo" width="150px">-->
          <!--</div>-->

          <!--<v-card class="mx-auto pa-2">-->
            <!--<v-card-title class="justify-center flex-column">-->
              <!--<span>Signup</span>-->
              <!--<v-subheader class="justify-center">Step 3. Please, set your password</v-subheader>-->
            <!--</v-card-title>-->
            <!--<v-card-text class="mt-4">-->

              <!--<v-text-field-->
                <!--v-model="pwd"-->
                <!--:rules="pwdRules"-->
                <!--label="Password"-->
                <!--type="password"-->
                <!--outlined-->
                <!--required-->
              <!--&gt;</v-text-field>-->

              <!--<div class="d-block">-->
                <!--<v-btn-->
                  <!--color="formBut1"-->
                  <!--class="px-5 text-capitalize"-->
                  <!--@click="validate"-->
                <!--&gt;-->
                  <!--Finish-->
                <!--</v-btn>-->
              <!--</div>-->

            <!--</v-card-text>-->
          <!--</v-card>-->
        <!--</v-form>-->
        <form>
          <v-text-field
            ref="password"
            type="password"
            v-model="pass"
            v-validate="'required'"
            label="Pass"
            data-vv-name="pass"
            required
          ></v-text-field>
          <v-text-field
            v-model="pass2"
            type="password"
            v-validate="'required|confirmed:password'"
            label="Pass 2"
            data-vv-name="pass"
            required
          ></v-text-field>

          <v-btn @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
      </v-flex>

    </v-container>
  </v-content>
</template>

<script>
  import Vue from 'vue'
  import  * as VeeValidate from 'vee-validate'
  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new',
    },
    name: "SignUpStep3",
    data: () => ({
      pass: '',
      pass2: '',
      // valid: true,
      // key: '',
      // keyRules: [
      //   v => !!v || 'Key is required',
      //   // v => (v && v.length <= 2) || 'First Name must be less than 2 characters',
      // ],
    }),

    // methods: {
    //   validate () {
    //     if (this.$refs.form.validate()) {
    //       this.$router.push({name: 'Profile'})
    //       // this.snackbar = true
    //     }
    //   }
    // },

    methods: {
      submit () {
        this.$validator.validateAll()
          .then(result => {
            console.log(result)
          })
      },
      clear () {
        this.pass = ''
        this.pass2 = ''
      }
    }
  }
</script>

<style scoped>

</style>
