import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-todo-input",
  templateUrl: "./todo-input.component.html"
})
export class TodoInputComponent implements OnInit {
  todo: FormControl = new FormControl();

  constructor() {}

  @Output() add: EventEmitter<string> = new EventEmitter();

  addTodo() {
    if (this.todo.value !== null && this.todo.value !== "") {
      this.add.emit(this.todo.value);
      this.todo.reset();
    }
  }

  ngOnInit() {}
}
