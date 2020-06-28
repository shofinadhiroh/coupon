<template>
  <div class="memberdetail">
    <Memberdetail />
  </div>
</template>

<script>
// @ is an alias to /src
import Memberdetail from "@/components/Memberdetailpage.vue";

export default {
  name: 'memberdetail',
  components: {
    Memberdetail
  },
};
</script>

<style>
.memberdetail {
  height: 100%;
  width: 100%;
}
</style>

