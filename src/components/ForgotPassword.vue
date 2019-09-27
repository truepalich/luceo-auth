<template>
  <v-flex xs12 sm4 offset-sm4 mt-3>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >

      <v-card class="mx-auto">
        <v-card-title>Forgot Password</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
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
            Submit
          </v-btn>
          <router-link :to="{ name: 'Login' }">Login</router-link>
        </v-card-actions>
      </v-card>

    </v-form>
  </v-flex>
</template>

<script>
    export default {
      name: "ForgotPassword",
      data: () => ({
        valid: true,
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
