<template>
  <div class="addpartner">
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
      
      <v-toolbar-title>Add Partner</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-container fluid class="py-12 px-6">
      <v-row class="mt-12">
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            placeholder="Brand Name"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            placeholder="Telephone Number"
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
          label="Address"
          class="elevation-0"
        ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            placeholder="Choose Location on Map"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <h4 class="mb-4">Brand Logo</h4>
          <v-file-input 
          label="Add" 
          solo
          class="elevation-0"
          prepend-icon="mdi-camera">
          </v-file-input>
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
  .addpartner{
    background-color: #F1F3F4;
  }
</style>