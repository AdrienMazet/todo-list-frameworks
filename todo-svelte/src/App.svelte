<script>
  import Header from "./Header.svelte";
  import TodoInput from "./TodoInput.svelte";
  import TodoItem from "./TodoItem.svelte";

  let todos = [
    { id: 0, text: "Faire les courses" },
    { id: 1, text: "Poster une  lettre de Noël" },
    { id: 2, text: "Acheter des cadeaux" }
  ];

  function addTodo(text) {
    todos = [...todos, { id: todos.length, text }];
  }

  function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
  }
</script>

<Header />
<TodoInput {addTodo} />
<TodoItem {todos} {deleteTodo} />
