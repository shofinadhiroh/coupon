<template>
  <div class="editcoupon">
    <Editcoupon />
  </div>
</template>

<script>
// @ is an alias to /src
import Editcoupon from "@/components/Editcouponpage.vue";

export default {
  name: "editcoupon",
  components: {
    Editcoupon
  }
};
</script>

<style>
.editcoupon {
  height: 100%;
  width: 100%;
}
</style>
