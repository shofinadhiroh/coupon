<template>
  <div class="payment">
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
      
      <v-toolbar-title>Payment Code</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-container fluid class="py-12 px-4">
      <v-row dense class="mt-6 mb-12">
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card class="mb-4">
           <v-card-text class="py-0">
            <v-row
              align="left">
              <v-col cols="sm-8" class="pb-0">
                  <p v-text="card.code" class="font-weight-black mb-1"></p>
              </v-col>
              <v-col cols="auto" class="px-4 pb-0">
                  <p v-text="card.status" justify="end" class="green--text d-inline-flex mr-1 mb-1"></p>
                  <p v-text="card.exp" justify="end" class="font-weight-bold d-inline-flex mb-1"></p>
              </v-col>
            </v-row>
            </v-card-text>
            <v-card-text v-text="card.desc" class="py-0 pb-3"></v-card-text>
            <v-card-actions class="px-4 pb-4">
              <v-spacer></v-spacer>

              <router-link to="/editpayment" class="none"><v-btn depressed small color="#FFF8E5" class="orange--text">EDIT</v-btn></router-link>
              <v-btn depressed small color="#FEF4F4" class="red--text">DELETE</v-btn>

            </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
      <v-footer
        fixed
        class="font-weight-medium footer"
        >
        <v-col
            class="text-center"
            cols="12"
        >
            <router-link to="/addpayment" class="none"><v-btn block color="#0041FF" dark class="py-6 mb-6">Add</v-btn></router-link>
        </v-col>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { code: 'BALLERSOUT4521', status: 'Valid', desc: '987654', exp: 'until 01/22', flex: 12 },
        { code: 'TGIF77', status: 'Valid', desc: '876543', exp: 'until 04/20', flex: 12 },
        { code: 'BALLERSOUT4521', status: 'Valid', desc: '987654', exp: 'until 01/22', flex: 12 },
        { code: 'TGIF77', status: 'Valid', desc: '876543', exp: 'until 04/20', flex: 12 },
        { code: 'BALLERSOUT4521', status: 'Valid', desc: '987654', exp: 'until 01/22', flex: 12 },
        { code: 'TGIF77', status: 'Valid', desc: '876543', exp: 'until 04/20', flex: 12 },
        { code: 'BALLERSOUT4521', status: 'Valid', desc: '987654', exp: 'until 01/22', flex: 12 },
        { code: 'TGIF77', status: 'Valid', desc: '876543', exp: 'until 04/20', flex: 12 },
        { code: 'BALLERSOUT4521', status: 'Valid', desc: '987654', exp: 'until 01/22', flex: 12 },
        { code: 'TGIF77', status: 'Valid', desc: '876543', exp: 'until 04/20', flex: 12 },
        
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
  .payment{
    background-color: #F1F3F4;
  }
</style>