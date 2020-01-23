<template>
  <v-app>
    <ErorrMessage/>
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
import ErorrMessage from "@/components/ErorrMessage";

export default {
  name: 'App',

  components: {
    Tabs,
    ErorrMessage,
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
