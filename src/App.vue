<template>
  <div id="app">
    <Navbar />
    <TaskForm />
    <TaskList/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import TaskForm from "@/components/TaskFrom";
import TaskList from "@/components/TaskList";

export default {
  name: "app",
  components: {
    Navbar,
    TaskForm,
    TaskList
  }
};
</script>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
}
</style>
