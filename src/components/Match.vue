<template>
  <v-card>
    <v-container>
      <v-row :dense="true">
        <v-col cols="9">
          <v-row :dense="true">
            <v-col cols="2">
              <v-img
                :src="homeTeam.crestUrl"
                width="30"
                height="30"
                :contain="true"
              />
            </v-col>
            <v-col
              cols="9"
              class="team-name"
            >
              <span :title="homeTeam.name">
                {{ homeTeam.name }}
              </span>
            </v-col>
            <v-col cols="1">
              <h4>{{ match.score.fullTime.homeTeam }}</h4>
            </v-col>
          </v-row>
          <v-row :dense="true">
            <v-col cols="2">
              <v-img
                :src="awayTeam.crestUrl"
                width="30"
                height="30"
                :contain="true"
              />
            </v-col>
            <v-col
              cols="9"
              class="team-name"
            >
              <span
                class="team-name"
                :title="awayTeam.name"
              >
                {{ awayTeam.name }}
              </span>
            </v-col>
            <v-col cols="1">
              <h4>{{ match.score.fullTime.awayTeam }}</h4>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="3"
          align-self="center"
          align="center"
        >
          <div>
            {{ data }}
          </div>
          <div>
            {{ time }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  import moment from 'moment';

  export default {
    name: "Match",
    props: ['match'],
    data() {
      return {
        data: moment(this.match.utcDate).format('DD.MM.YY'),
        time: moment(this.match.utcDate).format('HH:MM'),
      };
    },
    computed: {
      homeTeam() {
        return this.$store.getters.teamById(this.match.homeTeam.id);
      },
      awayTeam() {
        return this.$store.getters.teamById(this.match.awayTeam.id);
      },
    },
  }
</script>

<style scoped>
  .team-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>