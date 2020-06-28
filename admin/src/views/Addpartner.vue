<template>
  <div class="addpartner">
    <Addpartner />
  </div>
</template>

<script>
// @ is an alias to /src
import Addpartner from "@/components/Addpartnerpage.vue";

export default {
  name: "addpartner",
  components: {
    Addpartner
  }
};
</script>

<style>
.addpartner {
  height: 100%;
  width: 100%;
}
</style>
