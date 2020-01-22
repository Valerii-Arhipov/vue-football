<template>
  <v-app>
    <Tabs/>
    <div style="padding-top: 60px">
      <v-container>
        <router-view/>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Tabs from "@/components/Tabs";
import {actionsType} from "@/store/actions";

export default {
  name: 'App',

  components: {
    Tabs,
  },
  mounted() {
    this.$store.dispatch(
      {
        type: actionsType.GET_TEAMS,
      }
    );
  },
  data: () => ({
    //
  }),
};
</script>
