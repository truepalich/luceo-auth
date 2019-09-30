<template>
  <v-app>
    <!--<v-app-bar-->
      <!--app-->
      <!--color="blue darken-1"-->
    <!--&gt;-->
      <!--<v-toolbar-title><router-link style="text-decoration: none; color: #fff;" :to="{ name: 'Home' }"><v-icon class="mr-1">mdi-view-dashboard</v-icon>Luceo Auth</router-link></v-toolbar-title>-->
      <!--<div class="flex-grow-1"></div>-->

      <!--<v-avatar color="blue darken-2" class="mr-1">-->
        <!--<v-icon>mdi-account-circle</v-icon>-->
      <!--</v-avatar>-->
      <!--<v-menu-->
        <!--left-->
        <!--bottom-->
      <!--&gt;-->
        <!--<template v-slot:activator="{ on }">-->
          <!--<v-btn icon v-on="on" small>-->
            <!--<v-icon>mdi-dots-vertical</v-icon>-->
          <!--</v-btn>-->
        <!--</template>-->

        <!--<v-list>-->
          <!--<v-list-item>-->
            <!--<v-list-item-title>Logout</v-list-item-title>-->
          <!--</v-list-item>-->
        <!--</v-list>-->
      <!--</v-menu>-->
    <!--</v-app-bar>-->

    <router-view></router-view>



    <!--<v-footer color="blue darken-1">-->
      <!--<span class="white&#45;&#45;text">&copy; 2019</span>-->
    <!--</v-footer>-->
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    created: function () {
      this.$vuetify.theme.dark = true
    }
  }
</script>

<style>
  .form-type-1 {
    max-width: 440px;
    margin: 0px auto;
  }
</style>
