<template>
  <div class="editpartner">
    <v-app-bar
    class="elevation-0"
      absolute
      color="#F1F3F4"
      light
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <router-link to="/" class="none"><v-app-bar-nav-icon><v-icon dark left>mdi-close</v-icon></v-app-bar-nav-icon></router-link>

      <v-spacer></v-spacer>
      
      <v-toolbar-title>Edit Partner</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-container fluid class="pt-12 px-6">
      <v-row class="mt-12">
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            value="BurgerFi"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            value="(407) 281-6655"
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
          value="12101 University Blvd #207, Orlando, FL"
          class="elevation-0"
        ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            value="University Blvd #207"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" justify="end">
            <h4 class="mb-4">Brand Logo</h4>
            <div>
                <v-img class="mb-4" src="https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1"></v-img>
            </div>
        </v-col>
      </v-row>
      <router-link to="/partner"><v-btn block color="#0041FF" dark class="py-6 mb-6">Save</v-btn></router-link>
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
  .editpartner{
    background-color: #F1F3F4;
  }
</style>