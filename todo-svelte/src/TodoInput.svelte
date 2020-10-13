<script>
  export let addTodo;

  let todo = "";

  function submit() {
    if (todo !== "") {
      addTodo(todo);
      todo = "";
    }
  }
</script>

<div>
  <input bind:value={todo} />
  <button on:click={e => submit()}>AddTodo</button>
</div>
