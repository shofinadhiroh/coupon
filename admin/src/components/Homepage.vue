<template>
  <div class="home">
    <v-container fluid>
        <v-row>
        </v-row>
        <router-link to="/sendnotif" class="none"><v-btn block color="#0041FF" dark class="spacing-playground py-6 mb-5">Send Notification</v-btn></router-link>
        <v-row>
            <v-col>
                <h5 class="d-inline-flex">LATEST NOTIFICATION</h5>
            </v-col>
            <v-col class="d-inline-flex justify-end">
                <router-link to="/notification" class="none grey--text">view more</router-link>
            </v-col>
        </v-row>
        <v-card class="mb-5">
           <v-card-text class="py-3">
            <v-row
              align="left">
              <div class="mx-4 font-weight-bold">Everyday Value Offer</div>
              <v-spacer></v-spacer>
              <div class="grey--text mx-4">12 May, 1:30AM</div>
            </v-row>
            </v-card-text>
            <v-card-text class="py-0 pb-3">
            Choices on choices on choices! 50% off any handcrafted espresso beverage, size grande or larger.
            </v-card-text>
        </v-card>
      <v-row dense class="mb-5">
        <v-col cols="6">
          <router-link to="/paymentcode" class="none">
            <v-card>
              <div class="pt-4 pl-4"><v-img src="../assets/asset_paymentcode.png" class="logo"></v-img></div>
              <v-card-text class="body-1 font-weight-bold pt-2">Payment Code</v-card-text>
              <v-card-actions>

                  <v-row
                  justify="end"
                  >
                      <v-card-text class="display-1 d-flex flex-row-reverse">24</v-card-text>
                  </v-row>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="6">
          <router-link to="/member" class="none">
            <v-card>
              <div class="pt-4 pl-4"><v-img src="../assets/asset_member.png" class="logo"></v-img></div>
              <v-card-text class="body-1 font-weight-bold pt-2">Member</v-card-text>
              <v-card-actions>

                  <v-row
                  justify="end"
                  >
                      <v-card-text class="display-1 d-flex flex-row-reverse">10</v-card-text>
                  </v-row>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
      <v-row dense class="mb-5">
        <v-col cols="6">
          <router-link to="/coupon" class="none">
            <v-card>
              <div class="pt-4 pl-4"><v-img src="../assets/asset_member.png" class="logo"></v-img></div>
              <v-card-text class="body-1 font-weight-bold pt-2">Coupon</v-card-text>
              <v-card-actions>

                  <v-row
                  justify="end"
                  >
                      <v-card-text class="display-1 d-flex flex-row-reverse">13</v-card-text>
                  </v-row>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="6">
          <router-link to="/partner" class="none">
            <v-card>
              <div class="pt-4 pl-4"><v-img src="../assets/asset_partner.png" class="logo"></v-img></div>
              <v-card-text class="body-1 font-weight-bold pt-2">Partner</v-card-text>
              <v-card-actions>

                  <v-row
                  justify="end"
                  >
                      <v-card-text class="display-1 d-flex flex-row-reverse">6</v-card-text>
                  </v-row>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
      <v-btn block color="#FF8A00" dark class="spacing-playground py-6 mb-5">Export All Data to Excel</v-btn>
    </v-container>
  </div>
</template>

<script>

</script>

<style scoped>
  .ballersout{
    height: 100px
  }
  .logo{
    width: 30px;
  }
  .none{
    text-decoration: none;
  }
  .home{
    background-color: #F1F3F4;
  }
</style>