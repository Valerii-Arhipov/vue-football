<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{ index + 1 }} matchday</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
        <v-col
          xl="3"
          lg="4"
          md="6"
          sm="6"
          v-for="(match, index) in matches"
          :key="index"
        >
          <Match :match="match"/>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  import Match from "@/components/Match";

  export default {
    name: "Matchday",
    props: ['matches', 'index', 'isCurrentMatchday'],
    components: {
      Match,
    },
    mounted() {
      if (this.isCurrentMatchday){
        window.scrollTo(0, this.$el.offsetTop)
      }
    },
  }
</script>

<style scoped>

</style>