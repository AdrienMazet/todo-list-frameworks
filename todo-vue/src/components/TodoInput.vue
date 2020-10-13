<template>
  <v-container>
    <v-row justify="center">
      <v-col md="2">
        <v-text-field label="Todo" v-model="todo" :value="todo"></v-text-field>
      </v-col>
      <v-col md="1">
        <v-btn class="ma-2" outlined color="primary" v-on:click="submit(todo)">
          Add todo
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoInput',
  props: { addTodo: Function },
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    submit: function(text: string): void {
      if (text !== '') this.addTodo(text);
      this.todo = '';
    },
  },
});
</script>
