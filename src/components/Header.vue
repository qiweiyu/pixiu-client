<template>
  <div>
    <v-toolbar color="grey darken-3" dark fixed>
      <v-toolbar-title @click="jumpTo('Index')">貔貅</v-toolbar-title>
      <v-subheader>pixiu</v-subheader>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
  import utils from '@/libs/utils';

  export default {
    name: 'Header',
    data() {
      return {
        user: utils.getUser(),
      };
    },
    methods: {
      jumpTo(name) {
        this.$router.push({ name });
      },
      logout() {
        this.$cookie.delete('user');
        this.user = utils.getUser();
        this.$router.replace({ name: 'Index' });
      },
    },
    watch: {
      $route(to, from) {
        this.user = utils.getUser();
      },
    },
  };
</script>
