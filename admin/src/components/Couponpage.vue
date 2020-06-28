<template>
  <div class="coupon">
    <v-app-bar
    class="elevation-0"
      absolute
      color="white"
      light
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <router-link to="/" class="none"><v-app-bar-nav-icon><v-icon dark left>mdi-arrow-left</v-icon></v-app-bar-nav-icon></router-link>

      <v-spacer></v-spacer>
      
      <v-toolbar-title>Coupon</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-container fluid class="py-12 px-4">
      <v-row dense class="mt-6 mb-12">
        <router-link to="/coupondetail" class="none">
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card class="mb-0">
            <v-card-text class="py-3">
              <v-row
                align="left">
                <v-col cols="8">
                    <div v-text="card.title" class="font-weight-bold"></div>
                </v-col>
                <v-col cols="4" justify="end">
                    <div v-text="card.status" class="green--text text-right"></div>
                </v-col>
              </v-row>
              </v-card-text>
              <v-card-text v-text="card.desc" class="py-0 pb-3"></v-card-text>
          </v-card>
          </v-col>
        </router-link>
      </v-row>
      <v-footer
        fixed
        class="font-weight-medium footer"
        >
        <v-col
            class="text-center"
            cols="12"
        >
            <router-link to="/addcoupon" class="none"><v-btn block color="#0041FF" dark class="py-6 mb-6">Add</v-btn></router-link>
        </v-col>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', status: 'Active', desc: 'Reedemed 20x', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', status: 'Active', desc: 'Reedemed 20x', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', status: 'Active', desc: 'Reedemed 20x', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', status: 'Active', desc: 'Reedemed 20x', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', status: 'Active', desc: 'Reedemed 20x', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
      ],
    }),
  }
</script>

<style scoped>
  .footer{
    max-width: 480px;
    margin: auto;
  }
  .none{
    text-decoration: none;
  }
  .coupon{
    background-color: #F1F3F4;
  }
</style>