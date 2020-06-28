<template>
  <div class="contact">
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar
    class="elevation-1"
      absolute
      color="white"
      light
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <router-link to="/" class="none"><v-app-bar-nav-icon><v-icon dark left>mdi-arrow-left</v-icon></v-app-bar-nav-icon></router-link>

      <v-toolbar-title>Contact Us</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-container fluid class="py-12">
      <v-row>
        <v-col cols="12 pt-4 pb-0 px-6">
            <p class="font-weight-bold black--text">Numero de telefono</p>
        </v-col>
        <v-col cols="12 py-0 px-6">
            <p class="black--text">+593 99-160-0766</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12 pt-4 pb-0 px-6">
            <p class="font-weight-bold black--text">Correo electronico</p>
        </v-col>
        <v-col cols="12 py-0 px-6">
            <p class="black--text">Ballersoutec@gmail.com6</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>

<style scoped>
  .none{
    text-decoration: none;
  }
  .contact{
    background-color: #F1F3F4;
  }
</style>