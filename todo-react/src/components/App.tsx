import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import TodoInput from "./TodoInput";
import Todo from "./Todo";
import TodoList from "./TodoList";

type Props = {};

type State = {
  todos: Todo[];
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, text: "Faire les courses" },
        { id: 1, text: "Poster une  lettre de Noël" },
        { id: 2, text: "Acheter des cadeaux" }
      ]
    };
  }

  addTodo = (text: string) => {
    this.setState({
      todos: [...this.state.todos, { id: this.state.todos.length, text }]
    });
  };

  deleteTodo = (id: number) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={8}
          style={{ marginTop: 10 }}
        >
          <Grid item>
            <TodoInput addTodo={this.addTodo} />
          </Grid>
          <Grid item>
            <TodoList todos={todos} deleteTodo={this.deleteTodo} />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default App;
