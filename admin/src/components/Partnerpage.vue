<template>
  <div class="partner">
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
      
      <v-toolbar-title>Partner</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-container fluid class="py-12">
      <v-row dense class="mt-6 mb-12">
        <router-link to="/partnerdetail" class="none">
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card class="mb-0">
            <v-card-text class="py-3">
              <v-row
                align="left">
                <v-col cols="3" class="pr-0 pl-4">
                    <v-img :src="card.src"></v-img>
                </v-col>
                <v-col cols="auto" justify="end">
                    <div v-text="card.title" class="subtitle-1 font-weight-bold"></div>
                    <div v-text="card.amount" class="grey--text subtitle-1"></div>
                </v-col>
              </v-row>
              </v-card-text>
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
            <router-link to="/addpartner" class="none"><v-btn block color="#0041FF" dark class="py-6 mb-6">Add</v-btn></router-link>
        </v-col>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'BurgerFi', amount: '3 Coupon', src: 'https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1', flex: 12 },
        { title: 'Uncle Maddios Pizza', amount: '16 Coupon', src: 'https://static1.squarespace.com/static/52cf5852e4b0c1274ad7d85c/t/55e1a552e4b0088b5f195ac2/1589561992167/', flex: 12 },
        { title: 'BurgerFi', amount: '3 Coupon', src: 'https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1', flex: 12 },
        { title: 'Uncle Maddios Pizza', amount: '16 Coupon', src: 'https://static1.squarespace.com/static/52cf5852e4b0c1274ad7d85c/t/55e1a552e4b0088b5f195ac2/1589561992167/', flex: 12 },
        { title: 'BurgerFi', amount: '3 Coupon', src: 'https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1', flex: 12 },
        { title: 'Uncle Maddios Pizza', amount: '16 Coupon', src: 'https://static1.squarespace.com/static/52cf5852e4b0c1274ad7d85c/t/55e1a552e4b0088b5f195ac2/1589561992167/', flex: 12 },
        { title: 'BurgerFi', amount: '3 Coupon', src: 'https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1', flex: 12 },
        { title: 'Uncle Maddios Pizza', amount: '16 Coupon', src: 'https://static1.squarespace.com/static/52cf5852e4b0c1274ad7d85c/t/55e1a552e4b0088b5f195ac2/1589561992167/', flex: 12 },
        { title: 'BurgerFi', amount: '3 Coupon', src: 'https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1', flex: 12 },
        { title: 'Uncle Maddios Pizza', amount: '16 Coupon', src: 'https://static1.squarespace.com/static/52cf5852e4b0c1274ad7d85c/t/55e1a552e4b0088b5f195ac2/1589561992167/', flex: 12 },
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
  .partner{
    background-color: #F1F3F4;
  }
</style>