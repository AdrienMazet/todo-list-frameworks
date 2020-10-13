<template>
  <v-container>
    <TodoItem v-for="todo in todos" :deleteTodo="deleteTodo" :key="todo.id" v-bind:todo="todo" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoItem from './TodoItem.vue';
import Todo from './Todo';

export default Vue.extend({
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: { todos: Array, deleteTodo: Function },
});
</script>
