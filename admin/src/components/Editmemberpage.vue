<template>
  <div class="editmember">
    <v-app-bar
    class="elevation-0"
      absolute
      color="#F1F3F4"
      light
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <router-link to="/memberdetail" class="none"><v-app-bar-nav-icon><v-icon dark left>mdi-close</v-icon></v-app-bar-nav-icon></router-link>

      <v-spacer></v-spacer>
      
      <v-toolbar-title>Edit Member</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-container fluid class="py-12 px-6">
      <v-row class="mt-12">
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            value="johndoe@gmail.com"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            value="johndoe"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            value="*****"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-select
          :items="gender"
          label="Male"
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
            value="28/11/1999"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="6" class="py-0">
          <v-select
          :items="status"
          label="Active"
          dense
          solo
          class="elevation-0"
        ></v-select>
        </v-col>
        <v-col cols="6" sm="6" class="py-0">
          <v-text-field
            label="Solo"
            value="01/22"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <router-link to="/member"><v-btn block color="#0041FF" dark class="py-6 mb-6">Save</v-btn></router-link>
      </v-container>
  </div>
</template>

<script>
  export default {
   data: () => ({
      gender: ['Male', 'Female'],
      status: ['Active', 'Not Active'],
    }),
  }
</script>

<style scoped>
  .none{
    text-decoration: none;
  }
  .editmember{
    background-color: #F1F3F4;
  }
</style>