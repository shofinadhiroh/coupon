<template>
  <div class="editaccount">
    <v-container fluid class="py-6 px-6">
      <v-row>
          <v-col cols="12" sm="12" class="py-0 mb-6">
          <router-link to="/login" class="none mb-4"><v-app-bar-nav-icon><v-icon dark left large>mdi-close</v-icon></v-app-bar-nav-icon></router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" class="py-0 mb-7">
          <v-text class="text-center brown--text text-h5">Edit Account</v-text>
        </v-col>
      </v-row>
      <v-row>
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
      <router-link to="/myaccount"><v-btn block color="#0041FF" dark class="py-6 mb-6">Save</v-btn></router-link>
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
  .editaccount{
    background-color: #F1F3F4;
  }
</style>