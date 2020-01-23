<template>
    <v-progress-circular
      size="200"
      color="purple darken-2"
      :width="10"
      indeterminate
      class="spiner"
    />
</template>

<script>
  export default {
    name: "Spiner"
  }
</script>

<style scoped>
  .spiner {
    margin-left: 50%;
    transform: translateX(-50%);
  }
</style>