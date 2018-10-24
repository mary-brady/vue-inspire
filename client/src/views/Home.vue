<template>
  <div class="home container-fluid">
    <h1>Hellooooooooo</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/views/Login.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  created() {
    if (!this.$store.state.user._id) {
      this.$router.push({ name: "login" });
    }
  }
};
</script>
