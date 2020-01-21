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
  import { mapGetters } from 'vuex';

  import Matchday from "@/components/Matchday";

  export default {
    name: "Matches",
    components: {
      Matchday,
    },
    computed: {
      ...mapGetters([
        'matchdayMatches',
        'currentMatchday'
      ]),
    }
  }
</script>

<style scoped>

</style>