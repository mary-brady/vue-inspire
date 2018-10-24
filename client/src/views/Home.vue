<template>
  <div class="home container-fluid">
    <h1>Hellooooooooo, {{user.name}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/views/Login.vue";

export default {
  name: "home",
  created() {
    if (!this.$store.state.user._id) {
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
      console.log(this.user);
    }
  }
};
</script>
