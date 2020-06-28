<template>
  <div class="editcoupon">
    <v-app-bar
    class="elevation-0"
      absolute
      color="#F1F3F4"
      light
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <router-link to="/coupondetail" class="none"><v-app-bar-nav-icon><v-icon dark left>mdi-close</v-icon></v-app-bar-nav-icon></router-link>

      <v-spacer></v-spacer>
      
      <v-toolbar-title>Edit Coupon</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-container fluid class="py-12 px-6">
      <v-row class="mt-12">
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            value="2"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-textarea
          solo
          name="input-7-4"
          value="BOGO Pizzas: Buy One Personal Piazza, Get One Free"
          class="elevation-0"
        ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-select
          :items="partner"
          label="BurgerFi"
          dense
          solo
          class="elevation-0"
        ></v-select>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            value="34"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <h4 class="mb-0">Coupon Picture</h4>
            <v-col cols="12" justify="end">
                <div><v-img src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/BF.jpg?itok=QY4oglKO"></v-img></div>
            </v-col>
        </v-col>
      </v-row>
      <router-link to="/coupon"><v-btn block color="#0041FF" dark class="py-6 mb-6">Send</v-btn></router-link>
      </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
        partner: ['BurgerFi', 'Starbucks'],
    }),
  }
</script>

<style scoped>
  .none{
    text-decoration: none;
  }
  .editcoupon{
    background-color: #F1F3F4;
  }
</style>