import React from "react";
import Todo from "./Todo";
import TodoItem from "./TodoItem";
type Props = {
  todos: Todo[];
  deleteTodo(id: number): void;
};

class TodoList extends React.Component<Props> {
  render() {
    const { todos, deleteTodo } = this.props;
    return (
      <>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </>
    );
  }
}

export default TodoList;
