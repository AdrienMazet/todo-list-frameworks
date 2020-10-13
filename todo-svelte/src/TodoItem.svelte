<script>
  export let todos;
  export let deleteTodo;
</script>

<style>
  #item {
    display: flex;
  }
  #todo {
    margin-right: 20px;
  }
</style>

{#each todos as { id, text }}
  <div id="item">
    <p id="todo">{text}</p>
    <button on:click={e => deleteTodo(id)}>DeleteTodo</button>
  </div>
{/each}
