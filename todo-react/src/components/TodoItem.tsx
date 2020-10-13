import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import Todo from "./Todo";

type Props = {
  todo: Todo;
  deleteTodo(id: number): void;
};

class TodoItem extends React.Component<Props> {
  render() {
    const { todo, deleteTodo } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={8}
      >
        <Grid item>
          <Typography>{todo.text}</Typography>
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete todo
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default TodoItem;
