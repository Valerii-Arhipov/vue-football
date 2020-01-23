<template>
  <Spiner v-if="loading"/>
  <div v-else>
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
  import { mapGetters, mapState } from 'vuex';

  import Matchday from "@/components/Matchday";
  import { actionsType } from "@/store/actions";
  import Spiner from "@/components/Spiner";

  export default {
    name: "Matches",
    components: {
      Matchday,
      Spiner,
    },
    mounted() {
      this.$store.dispatch(
        {
          type: actionsType.GET_MATCHES,
        }
      );
    },
    computed: {
      ...mapGetters([
        'matchdayMatches',
        'currentMatchday'
      ]),
      ...mapState({
        loading: state => state.loading.matches,
      }),
    }
  }
</script>

<style scoped>

</style>