<template>
  <div class="addpayment">
    <Addpayment />
  </div>
</template>

<script>
// @ is an alias to /src
import Addpayment from "@/components/Addpaymentpage.vue";

export default {
  name: "addpayment",
  components: {
    Addpayment
  }
};
</script>

<style>
.addpayment {
  height: 100%;
  width: 100%;
}
</style>
