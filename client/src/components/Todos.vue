<template>
  <div class="todos">
  </div>
</template>

<script>
export default {
  name: "todos",
  data() {
    return {
      newTodo: {
        description: ""
      }
    };
  },
  mounted() {
    this.$store.dispatch("getTodos");
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    user() {
      return this.$store.state.user;
    },
    methods: {
      addTodo() {
        this.$store.dispatch("addTodo");
      },
      editTodo() {
        this.$store.dispatch("editTodo", todoData);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
