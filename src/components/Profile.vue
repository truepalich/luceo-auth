<template>
  <div>

    <v-app-bar app color="blue darken-1">
      <v-toolbar-title><router-link style="text-decoration: none; color: #fff;" :to="{ name: 'Home' }">
        <v-icon class="mr-1">mdi-view-dashboard</v-icon>Luceo Auth</router-link>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-app-bar>

    Profile

  </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>
