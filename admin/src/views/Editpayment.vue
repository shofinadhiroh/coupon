<template>
  <div class="editpayment">
    <Editpayment />
  </div>
</template>

<script>
// @ is an alias to /src
import Editpayment from "@/components/Editpaymentpage.vue";

export default {
  name: "editpayment",
  components: {
    Editpayment
  }
};
</script>

<style>
.editpayment {
  height: 100%;
  width: 100%;
}
</style>
