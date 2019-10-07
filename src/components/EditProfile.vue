<template>
  <v-content>
    <v-container fluid class="fill-height">

      <v-flex class="form-type-1">

        <v-card class="mx-auto px-2 py-2">

          <v-card-title class="justify-center">
            <v-row>
              <v-col class="d-flex align-center">
                <router-link :to="{ name: 'Profile' }"><img :src="brand.logo" :alt="brand.name"></router-link>
              </v-col>
              <v-col class="text-right">
                <v-avatar color="grey darken-2" class="mr-0" size="30">
                  <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
                <span class="subtitle-2 mr-0">Alexei</span>
                <v-menu
                  left
                  bottom
                >
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" small>
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item :to="{ name: 'EditProfile' }">
                      <v-list-item-title>Edit profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="{ name: 'Login' }">
                      <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="12" class="py-0">
                <v-divider></v-divider>
              </v-col>

            </v-row>

          </v-card-title>
          <v-card-text class="mt-4">

            <p class="title text-center">Edit Profile:</p>

            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="firstName"
                :rules="firstNameRules"
                placeholder="First Name"
                required
                solo
                light
                class="mb-1"
              ></v-text-field>

              <v-text-field
                v-model="lastName"
                :rules="lastNameRules"
                placeholder="Last Name"
                required
                solo
                light
                class="mb-1"
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                placeholder="Email"
                required
                solo
                light
                class="mb-1"
              ></v-text-field>

              <div class="d-block">
                <v-btn
                  :color="brand.primaryColor"
                  class="px-5 text-capitalize"
                  @click="validateInfo"
                >
                  Save
                </v-btn>
              </div>
            </v-form>

            <p class="title text-center mt-5">Change Password:</p>

            <v-form
              ref="form2"
              v-model="valid"
              lazy-validation
            >

              <v-text-field
                v-model="pwdOld"
                :rules="pwdOldRules"
                placeholder="Old Password"
                type="password"
                required
                solo
                light
                class="mb-1"
              ></v-text-field>

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
                  :color="brand.primaryColor"
                  class="px-5 text-capitalize"
                  @click="validatePassword"
                >
                  Save
                </v-btn>
              </div>


            </v-form>

          </v-card-text>
        </v-card>

      </v-flex>

    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: "EditProfile",
    data: () => ({
      brand: {},
      valid: true,
      firstName: 'Alexei',
      firstNameRules: [
        v => !!v || 'First Name is required',
        // v => (v && v.length <= 2) || 'First Name must be less than 2 characters',
      ],
      lastName: 'Chizhmakov',
      lastNameRules: [
        v => !!v || 'Last Name is required',
        // v => (v && v.length <= 2) || 'First Name must be less than 2 characters',
      ],
      email: 'test@test.com',
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      pwd: '',
      pwdOld: '',
      pwdConfirmation: '',
      pwdRules: [
        v => !!v || 'New Password is required',
      ],
      pwdOldRules: [
        v => !!v || 'Old Password is required',
      ],
    }),

    created: function () {
      this.brand = this.$store.getters.getBrandBySlug(this.$route.params.brandSlug);
      if (this.brand == undefined) {
        this.brand = this.$store.getters.getBrandBySlug('luceo-sports');
      }
    },

    computed: {
      pwdConfirmationRules() {
        return [
          () => (this.pwd === this.pwdConfirmation) || 'Passwords must match',
          v => !!v || 'New Password Confirmation is required'
        ];
      },
    },

    methods: {
      validateInfo () {
        if (this.$refs.form.validate()) {
          this.$router.push({name: 'Profile'})
          // this.snackbar = true
        }
      },
      validatePassword () {
        if (this.$refs.form2.validate()) {
          this.$router.push({name: 'Profile'})
          // this.snackbar = true
        }
      }
    },
  }
</script>

<style scoped>

</style>
