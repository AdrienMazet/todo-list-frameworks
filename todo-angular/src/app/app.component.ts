import { Component } from "@angular/core";
import Todo from "./Todo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "todo-angular";
  todos: Todo[];
  constructor() {
    this.todos = [
      { id: 0, text: "Faire les courses" },
      { id: 1, text: "Poster une  lettre de Noël" },
      { id: 2, text: "Acheter des cadeaux" }
    ];
  }

  addTodo(text: string): void {
    this.todos = [...this.todos, { id: this.todos.length, text }];
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
