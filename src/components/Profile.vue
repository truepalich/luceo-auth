<template>
  <v-content>
    <v-container fluid class="fill-height">

      <v-flex class="form-type-1">

        <v-card class="mx-auto px-2 py-2">

          <v-card-title class="justify-center">
            <v-row>
              <v-col class="d-flex align-center">
                <router-link :to="{ name: 'Profile' }"><img src="../assets/LuceoSports-Logo.png" alt="Luceo" width="110px"></router-link>
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

            <p class="title text-center">Apps:</p>
            <v-btn block x-large color="appsBut" dark class="mb-2 text-capitalize"><v-icon left dark>mdi-human-greeting</v-icon> Assist</v-btn>
            <v-btn block x-large color="appsBut" dark class="mb-2 text-capitalize"><v-icon left dark>mdi-history</v-icon> Session tracker</v-btn>
            <v-btn block x-large color="appsBut" dark class="mb-2 text-capitalize"><v-icon left dark>mdi-bulletin-board</v-icon> White board</v-btn>
            <v-btn block x-large color="appsBut" dark class="mb-2 text-capitalize"><v-icon left dark>mdi-gamepad</v-icon> Game plan editor</v-btn>

            <v-btn block x-large color="appsBut" dark class="mb-2 text-capitalize"><v-icon left dark>mdi-library</v-icon> Assist Usage Reports</v-btn>
            <v-btn block x-large color="appsBut" dark class="mb-2 text-capitalize"><v-icon left dark>mdi-account-multiple</v-icon> Resources and Community</v-btn>

            <!--<v-layout row wrap>-->
              <!--<v-flex v-bind="{[`xs${item.xs} sm${item.sm}`]: true}" v-for="(item, i) in cards" :key="`cards${i}`" class="ma-3">-->
                <!--<v-hover>-->
                  <!--<v-card color="primary" class="white&#45;&#45;text darken-1 card-box" slot-scope="{ hover }">-->
                    <!--<v-container fill-height fluid pa-2>-->
                      <!--<v-layout fill-height align-center text-xs-center>-->
                        <!--<v-flex xs12 flexbox class="card-item">-->
                          <!--<v-icon class="icon white&#45;&#45;text">{{ item.icon }}</v-icon>-->
                          <!--<p class="naming">{{ item.title }}</p>-->
                        <!--</v-flex>-->
                      <!--</v-layout>-->
                    <!--</v-container>-->
                  <!--</v-card>-->
                <!--</v-hover>-->
              <!--</v-flex>-->
            <!--</v-layout>-->



          </v-card-text>
        </v-card>

      </v-flex>

    </v-container>
  </v-content>
</template>

<script>
    export default {
      name: "Profile",
      computed: {
        cards() {
          let cards = [
            {
              title: 'schedule',
              icon: 'mdi-dots-vertical',
              xs: 12,
              sm: 6,
            }
          ];
          return cards;
        },
      }
    }
</script>

<style scoped>

</style>
