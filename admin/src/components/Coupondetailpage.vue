<template>
  <div class="coupondetail">
    <v-app-bar
      class="elevation-0"
        absolute
        color="#F1F3F4"
        light
        hide-on-scroll
        scroll-target="#scrolling-techniques-4"
      >
        <router-link to="/coupon" class="none"><v-app-bar-nav-icon><v-icon dark left>mdi-close</v-icon></v-app-bar-nav-icon></router-link>

        <v-spacer></v-spacer>

        <v-spacer></v-spacer>

        <div class="red--text text-right">DELETE</div>

      </v-app-bar>
      <v-container fluid class="pt-12 pb-0 px-4">
        <v-card class="mb-4 mt-6">
           <v-card-text class="py-3">
            <v-row
              align="left">
              <v-col cols="6">
                  <div class="font-weight-bold">Coupon Info</div>
              </v-col>
              <v-col cols="6" justify="end">
                  <router-link to="/editcoupon" class="none"><div class="orange--text text-right">EDIT</div></router-link>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Order</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">2</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Title</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">BOGO Pizzas: Buy One Personal Pizza Get One Free</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Partner</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">BurgerFi</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Total Savings</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">34</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Status</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="green--text body-2">Active</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Picture</div>
              </v-col>
              <v-col cols="12" justify="end">
                  <div><v-img src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/BF.jpg?itok=QY4oglKO"></v-img></div>
              </v-col>
            </v-row>
            </v-card-text>
            <v-card-text class="py-0 pb-3"></v-card-text>
        </v-card>
        <v-btn block color="#F12323" dark class="spacing-playground py-6 mb-5">Deactivate the Coupon</v-btn>
    </v-container>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .none{
    text-decoration: none;
  }
  .coupondetail{
    background-color: #F1F3F4;
  }
</style>