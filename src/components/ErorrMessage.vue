<template>
  <v-overlay
    :value="error"
  >
    <v-card>
      something went wrong
    </v-card>
  </v-overlay>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "ErorrMessage",
    computed: {
      ...mapState(['error'])
    }
  }
</script>

<style scoped>

</style>