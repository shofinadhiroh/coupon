<template>
  <div class="addpayment">
    <v-app-bar
    class="elevation-0"
      absolute
      color="#F1F3F4"
      light
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <router-link to="/paymentcode" class="none"><v-app-bar-nav-icon><v-icon dark left>mdi-close</v-icon></v-app-bar-nav-icon></router-link>

      <v-spacer></v-spacer>
      
      <v-toolbar-title>Add Payment Code</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-container fluid class="py-12 px-6">
      <v-row class="mt-12">
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            placeholder="Payment Code"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            placeholder="PIN"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn outlined block color="#0041FF" dark class="py-6 mb-6">Generate Code and PIN</v-btn>
      <router-link to="/paymentcode"><v-btn block color="#0041FF" dark class="py-6 mb-6">Save</v-btn></router-link>
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
  .addpayment{
    background-color: #F1F3F4;
  }
</style>