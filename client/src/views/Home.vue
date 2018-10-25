<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-md-12">
      <div class="weather">
        <p>{{weather.main.temp}}°F</p>
        <p>{{weather.name}}</p>
        <p>{{weather.weather[0].description}}</p>
      </div>
      </div>
    </div>
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
  mounted() {
    this.$store.dispatch("getWeather");
  },
  computed: {
    user() {
      return this.$store.state.user;
      console.log(this.user);
    },
    weather() {
      return this.$store.state.weather;
    }
  }
};
</script>
