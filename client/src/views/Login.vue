<template>
    <div class="login container-fluid">
        <div class="row">
            <div class="col-md-12">
                <form v-if="loginForm" @submit.prevent="loginUser" class="col-md-12 d-flex justify-content-center">
                <div class="form-group">
                    <input type="text">
                    <input type="password">
                    <button type="submit" class="btn btn-primary">Login!</button>
                </div>
                </form>
                <form v-else @submit.prevent="register" class="col-12 d-flex justify-content-center">
                    <div class="form-group">
                        <input type="text" v-model="newUser.name" placeholder="Name?">
                        <input type="email" v-model="newUser.email" placeholder="Email?">
                        <input type="text" v-model="newUser.username" placeholder="Desired Username?">
                        <input type="password" v-model="newUser.password" placeholder="Password">
                        <button type="submit" class="btn btn-primary">Register!</button>
                    </div>
                </form>
                <div @click="loginForm != loginForm" class="col-md-12">
                    <div v-if="loginForm">
                        <p>Don't have an account? Click to Register!</p>
                    </div>
                    <div v-else>
                        <p>Have an account? Click to login.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: true,
      creds: {
        username: "",
        password: ""
      },
      newUser: {
        email: "",
        name: "",
        username: "",
        password: ""
      }
    };
  },
  created() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>
<style scoped>
</style>
