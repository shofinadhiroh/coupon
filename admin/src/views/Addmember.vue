<template>
  <div class="addmember">
    <Addmember />
  </div>
</template>

<script>
// @ is an alias to /src
import Addmember from "@/components/Addmemberpage.vue";

export default {
  name: "addmember",
  components: {
    Addmember
  }
};
</script>

<style>
.addmember {
  height: 100%;
  width: 100%;
}
</style>
