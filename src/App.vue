<template>
  <v-app>
    <Tabs/>
    <v-container>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
import Tabs from "@/components/Tabs";

export default {
  name: 'App',

  components: {
    Tabs,
  },

  data: () => ({
    //
  }),
};
</script>
