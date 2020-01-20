<template>
  <div>
    <v-expansion-panels
      multiple
      :value="[currentMatchday - 1]"
    >
      <Matchday
        v-for="(matches, index) in matchdayMatches"
        :key="index"
        :index="index"
        :matches="matches"
        :isCurrentMatchday="currentMatchday - 1 === index"
      />
    </v-expansion-panels>
  </div>
</template>

<script>
  import Matchday from "@/components/Matchday";

  export default {
    name: "Matches",
    data() {
      return {a:1}
    },
    components: {
      Matchday,
    },
    computed: {
      matchdayMatches() {
        return this.$store.getters.matchdayMatches;
      },
      currentMatchday() {
        return this.$store.getters.currentMatchday;
      },
    }
  }
</script>

<style scoped>

</style>