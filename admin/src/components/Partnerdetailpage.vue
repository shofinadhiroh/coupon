<template>
  <div class="partnerdetail">
    <v-app-bar
      class="elevation-0"
        absolute
        color="#F1F3F4"
        light
        hide-on-scroll
        scroll-target="#scrolling-techniques-4"
      >
        <router-link to="/partner" class="none"><v-app-bar-nav-icon><v-icon dark left>mdi-close</v-icon></v-app-bar-nav-icon></router-link>

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
                  <div class="font-weight-bold">Partner Info</div>
              </v-col>
              <v-col cols="6" justify="end">
                  <router-link to="/editpartner" class="none"><div class="orange--text text-right">EDIT</div></router-link>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Name</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">BurgerFi</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Telephone</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">(407) 281-6655</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Address</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">12101 University Blvd #207, Orlando, FL</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Map</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">University Blvd #207</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="12">
                  <div class="grey--text body-2">Logo</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4" justify="end">
                  <div>
                      <v-img src="https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1"></v-img>
                  </div>
              </v-col>
            </v-row>
            </v-card-text>
            <v-card-text class="py-0 pb-3"></v-card-text>
        </v-card>
        <v-row dense class="mb-5">
            <v-row>
              <v-col cols="6">
                  <p class="body-2 font-weight-bold">Coupon List</p>
              </v-col>
              <v-col cols="6" justify="end">
                  <p class="text-right body-2">2 Coupon</p>
              </v-col>
            </v-row>
        <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card class="mb-4">
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
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
      ],
    }),
  }
</script>

<style scoped>
  .none{
    text-decoration: none;
  }
  .partnerdetail{
    background-color: #F1F3F4;
  }
</style>