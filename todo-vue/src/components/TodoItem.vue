<template>
  <v-row justify="center">
    <v-col md="2">
      <p>{{todo.text}}</p>
    </v-col>
    <v-col md="1">
      <v-btn class="ma-2" outlined color="#F50057" v-on:click="deleteTodo(todo.id)">
        Delete todo
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoItem',
  props: { todo: Object, deleteTodo: Function },
});
</script>
