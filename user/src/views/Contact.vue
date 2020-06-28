<template>
  <div class="contact">
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from "@/components/Contactpage.vue";

export default {
  name: "contact",
  components: {
    Contact
  }
};
</script>

<style>
.contact {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
