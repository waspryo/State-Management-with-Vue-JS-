<template>
  <div class="form">
    <input type="text" v-model="tasl" name="task" placeholder="Enter a task you need to do..." />
    <button>ADD</button>
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