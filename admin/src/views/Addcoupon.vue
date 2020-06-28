<template>
  <div class="addcoupon">
    <Addcoupon />
  </div>
</template>

<script>
// @ is an alias to /src
import Addcoupon from "@/components/Addcouponpage.vue";

export default {
  name: "addcoupon",
  components: {
    Addcoupon
  }
};
</script>

<style>
.addcoupon {
  height: 100%;
  width: 100%;
}
</style>
