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
              <v-subheader class="justify-center">Step 2. Please, enter KEY from email</v-subheader>
            </v-card-title>
            <v-card-text class="mt-4">


              <v-text-field
                v-model="key"
                :rules="keyRules"
                label="Key"
                outlined
                required
              ></v-text-field>

              <div class="d-block">
                <v-btn
                  color="formBut1"
                  class="px-5 text-capitalize"
                  @click="validate"
                >
                  Next
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
    name: "SignUpStep2",
    data: () => ({
      valid: true,
      key: '',
      keyRules: [
        v => !!v || 'Key is required',
        // v => (v && v.length <= 2) || 'First Name must be less than 2 characters',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.$router.push({name: 'SignUpStep3'})
          // this.snackbar = true
        }
      }
    },
  }
</script>

<style scoped>

</style>
