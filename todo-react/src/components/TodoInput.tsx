import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";

type Props = {
  addTodo(text: string): void;
};

type State = {
  text: string;
};

class TodoInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { text: "" };
  }

  submitTodo = () => {
    const { text } = this.state;
    if (text !== "") {
      this.props.addTodo(text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { text } = this.state;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={8}
      >
        <Grid item>
          <TextField
            value={text}
            label="Todo"
            onChange={event => this.setState({ text: event.target.value })}
          />
        </Grid>
        <Grid item>
          <Button color="primary" variant="outlined" onClick={this.submitTodo}>
            Add todo
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default TodoInput;
