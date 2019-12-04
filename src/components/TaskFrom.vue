<template>
  <div class="form">
    <input type="text" v-model="task" name="task" placeholder="Enter a task you need to do..." />
    <button @click="newTask">ADD</button>
  </div>
</template>

<script>
export default {
  name: "task-form",
  data() {
    return {
      // v-modelのパラメーター
      task: ""
    };
  },
  methods: {
      newTask () {
          this.$store.commit('newTask', this.task);
          this.task = '';
      }
  }
};
</script>

<style>
.form {
  width: 100vw;
  height: 35px;
  display: flex;
  align-items: stretch;
  margin: 0;
}
.form input {
  flex: 1;
}
</style>