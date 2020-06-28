<template>
  <div class="editaccount">
    <Editaccount />
  </div>
</template>

<script>
// @ is an alias to /src
import Editaccount from "@/components/Editaccountpage.vue";

export default {
  name: "editaccount",
  components: {
    Editaccount
  }
};
</script>

<style>
.editaccount {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
