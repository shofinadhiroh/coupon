<template>
  <div class="editmember">
    <Editmember />
  </div>
</template>

<script>
// @ is an alias to /src
import Editmember from "@/components/Editmemberpage.vue";

export default {
  name: "editmember",
  components: {
    Editmember
  }
};
</script>

<style>
.editmember {
  height: 100%;
  width: 100%;
}
</style>
