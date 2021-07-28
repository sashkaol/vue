<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
    <v-btn plain :ripple=false to="/">Dashboard</v-btn>
    <v-btn plain :ripple=false to="/about">About</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
