<template>
  <div class="notif">
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
      
      <v-toolbar-title>Notification</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-container fluid class="pt-12 pb-0 px-4">
      <v-row dense class="mb-5 mt-6">
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card class="mb-4">
           <v-card-text class="py-3">
            <v-row
              align="left">
              <div v-text="card.title" class="mx-4 font-weight-bold"></div>
              <v-spacer></v-spacer>
              <div v-text="card.time" class="grey--text mx-4"></div>
            </v-row>
            </v-card-text>
            <v-card-text v-text="card.desc" class="py-0 pb-3"></v-card-text>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Everyday Value Offer', time: '12 May, 1:30AM', desc: 'Craving a pizza? Up to 40% off on all pizza. Order Now!', flex: 12 },
        { title: 'Afternoon Upgrade', time: '11 May, 1:00 AM', desc: 'Choices on choices on choices! 50% off any handcrafted espresso beverage, size grande or larger.', flex: 12 },
        { title: 'FREE BREAKFAST!', time: '20 June, 2:15 PM', desc: 'Already got your coupons? Download coupons now and save up to 50%.', flex: 12 },
        { title: 'Everyday Value Offer', time: '12 May, 1:30AM', desc: 'Craving a pizza? Up to 40% off on all pizza. Order Now!', flex: 12 },
        { title: 'Afternoon Upgrade', time: '11 May, 1:00 AM', desc: 'Choices on choices on choices! 50% off any handcrafted espresso beverage, size grande or larger.', flex: 12 },
        { title: 'FREE BREAKFAST!', time: '20 June, 2:15 PM', desc: 'Already got your coupons? Download coupons now and save up to 50%.', flex: 12 },
        { title: 'Everyday Value Offer', time: '12 May, 1:30AM', desc: 'Craving a pizza? Up to 40% off on all pizza. Order Now!', flex: 12 },
        { title: 'Afternoon Upgrade', time: '11 May, 1:00 AM', desc: 'Choices on choices on choices! 50% off any handcrafted espresso beverage, size grande or larger.', flex: 12 },
        { title: 'FREE BREAKFAST!', time: '20 June, 2:15 PM', desc: 'Already got your coupons? Download coupons now and save up to 50%.', flex: 12 },
      ],
    }),
  }
</script>

<style scoped>
  .none{
    text-decoration: none;
  }
  .notif{
    background-color: #F1F3F4;
  }
</style>