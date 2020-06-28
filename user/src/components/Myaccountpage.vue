<template>
  <div class="account">
    <v-app-bar
    class="elevation-1"
      absolute
      color="white"
      light
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <router-link to="/" class="none"><v-app-bar-nav-icon><v-icon dark left>mdi-arrow-left</v-icon></v-app-bar-nav-icon></router-link>

      <v-toolbar-title>My Account</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-container fluid class="py-12 px-0">
      <v-list class="pb-0">
            <v-list-item class="grey-bg pt-2">
              <v-list-item-content class="d-inline-flex">
                <v-list-item-title class="font-weight-bold">Account Info</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content class="d-inline-flex justify-end">
                <router-link to="/editaccount" class="none"><v-list-item-title class="text-right orange--text">Edit</v-list-item-title></router-link>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>

            <v-list-item>
              <v-list-item-content class="d-inline-flex">
                <v-list-item-title class="grey--text">Email</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content class="d-inline-flex justify-end">
                <v-list-item-title class="text-right black--text">johndoe@gmail.com</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>

            <v-list-item>
              <v-list-item-content class="d-inline-flex">
                <v-list-item-title class="grey--text">Username</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content class="d-inline-flex justify-end">
                <v-list-item-title class="text-right black--text">johndoe</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list class="pb-0">
            <v-list-item class="grey-bg pt-4">
              <v-list-item-content class="d-inline-flex">
                <v-list-item-title class="font-weight-bold">Payment Method</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>

            <v-list-item>
              <v-list-item-content class="d-inline-flex">
                <v-list-item-title class="grey--text">Credit Card</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content class="d-inline-flex justify-end">
                <v-list-item-title class="text-right black--text"><v-icon color="black" medium>mdi-chevron-right</v-icon></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>
          </v-list>
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
  .account{
    background-color: #F1F3F4;
  }
  .grey-bg{
    background-color: #F1F3F4;
  }
</style>