<template>
    <div class="login container-fluid">
        <div class="row">
            <div class="col-md-12 ">
              <h1 class="underline">Welcome to Inspire!</h1>
              <div class="row register">
                <form v-if="loginForm" @submit.prevent="loginUser" class="col-md-3 d-flex">
                <div class="form-group">
                    <input type="text" v-model="creds.username" placeholder="Username">
                    <input type="password" v-model="creds.password" placeholder="Password">
                    <button type="submit" class="btn btn-primary mt-2">Login!</button>
                </div>
                </form>
                <form v-else @submit.prevent="register" class="col-md-3 d-flex">
                    <div class="form-group">
                        <input type="text" v-model="newUser.name" placeholder="Name?">
                        <input type="email" v-model="newUser.email" placeholder="Email?">
                        <input type="text" v-model="newUser.username" placeholder="Desired Username?">
                        <input type="password" v-model="newUser.password" placeholder="Password">
                        <button type="submit" class="btn btn-primary mt-2">Register!</button>
                    </div>
                </form>
                </div>
                <div class="row">
                <div @click="loginForm = !loginForm" class="col-md-12">
                    <div v-if="loginForm">
                        <p>Don't have an account? Click to Register.</p>
                    </div>
                    <div v-else>
                        <p>Have an account? Click to login.</p>
                    </div>
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
.register {
  justify-content: center;
}
.underline {
  text-decoration: underline;
}
</style>
