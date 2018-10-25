<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-md-12">
      <div class="weather">
        <p>{{weather.main.temp}}°F in {{weather.name}}</p>
        <p>{{weather.weather[0].description}}</p>
        <form @submit.prevent="changeWeather">
        <div class="form-group">
          <input type="text" v-model="newWeather.newZip" placeholder="Zip Code">
        <button class="btn btn-primary" type="submit">Change Location</button>
        </div>
        </form>
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
  data() {
    return {
      newWeather: {
        newZip: ""
      }
    };
  },
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
  },
  methods: {
    changeWeather() {
      this.$store.dispatch("changeWeather", parseFloat(this.newWeather.newZip));
    }
  }
};
</script>
