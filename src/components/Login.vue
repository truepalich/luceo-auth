<template>
  <v-flex xs12 sm4 offset-sm4 mt-3>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      >

      <v-card class="mx-auto">
        <v-card-title class="dialogHeader">Login</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            v-model="pwd"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Login
          </v-btn>
          <router-link :to="{ name: 'ForgotPassword' }">Forgot password?</router-link>
        </v-card-actions>
      </v-card>

    </v-form>
  </v-flex>
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
      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
    }),

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
