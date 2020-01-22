<template>
  <v-app-bar fixed>
    <v-tabs
      background-color="purple darken-2"
      color="white"
      centered
      optional
    >
      <v-tab to="/matches">
        Matches
      </v-tab>
      <v-tab to="/standing">
        Standings
      </v-tab>
      <v-tab to="/scorers">
        Scorers
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
  export default {
    name: "Tabs"
  }
</script>

<style scoped>

</style>