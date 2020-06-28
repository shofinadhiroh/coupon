<template>
  <div class="editpartner">
    <Editpartner />
  </div>
</template>

<script>
// @ is an alias to /src
import Editpartner from "@/components/Editpartnerpage.vue";

export default {
  name: "editpartner",
  components: {
    Editpartner
  }
};
</script>

<style>
.editpartner {
  height: 100%;
  width: 100%;
}
</style>
