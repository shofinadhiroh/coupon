<template>
  <div class="account">
    <Myaccount />
  </div>
</template>

<script>
// @ is an alias to /src
import Myaccount from "@/components/Myaccountpage.vue";

export default {
  name: "account",
  components: {
    Myaccount
  }
};
</script>

<style>
.account {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: grey;
}
</style>
