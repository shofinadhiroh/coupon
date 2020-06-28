<template>
  <div class="payment">
    <Payment />
  </div>
</template>

<script>
// @ is an alias to /src
import Payment from "@/components/Paymentcodepage.vue";

export default {
  name: "paymentcode",
  components: {
    Payment
  }
};
</script>

<style>
.payment {
  height: 100%;
  width: 100%;
}
</style>
