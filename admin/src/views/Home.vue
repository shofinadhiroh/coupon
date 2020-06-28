<template>
  <div class="home">
    <Homepage />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from "@/components/Homepage.vue";

export default {
  name: "home",
  components: {
    Homepage
  }
};
</script>

<style>
.home {
  height: 100%;
  width: 100%;
}
</style>

