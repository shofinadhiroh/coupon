<template>
  <div class="notif">
    <Payment />
  </div>
</template>

<script>
// @ is an alias to /src
import Payment from "@/components/Notificationpage.vue";

export default {
  name: 'payment',
  components: {
    Payment
  },
};
</script>

<style>
.notif {
  height: 100%;
  width: 100%;
}
</style>
