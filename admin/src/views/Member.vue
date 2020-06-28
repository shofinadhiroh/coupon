<template>
  <div class="member">
    <Member />
  </div>
</template>

<script>
// @ is an alias to /src
import Member from "@/components/Memberpage.vue";

export default {
  name: 'member',
  components: {
    Member
  },
};
</script>

<style>
.member {
  height: 100%;
  width: 100%;
}
</style>
