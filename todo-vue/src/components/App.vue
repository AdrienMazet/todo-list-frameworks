<template>
  <v-app id="app">
    <Header />
    <v-container>
      <v-col justify="center">
        <TodoInput :addTodo="addTodo" />
        <TodoList :todos="todos" :deleteTodo="deleteTodo" />
      </v-col>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './Header.vue';
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';
import Todo from './Todo';

export default Vue.extend({
  name: 'app',
  components: {
    Header,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todos: [
        { id: 0, text: 'Faire les courses' },
        { id: 1, text: 'Poster une  lettre de Noël' },
        { id: 2, text: 'Acheter des cadeaux' },
      ],
    };
  },
  methods: {
    addTodo: function(todo: string): void {
      this.todos.push({ id: this.todos.length, text: todo });
    },
    deleteTodo: function(id: number): void {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  },
});
</script>

<style>
#app {
  padding: 6px;
}
</style>
