<template>
  <div class="sendnotif">
    <Sendnotif />
  </div>
</template>

<script>
// @ is an alias to /src
import Sendnotif from "@/components/Sendnotifpage.vue";

export default {
  name: 'sendnotif',
  components: {
    Sendnotif
  },
};
</script>

<style>
.sendnotif {
  height: 100%;
  width: 100%;
}
</style>
