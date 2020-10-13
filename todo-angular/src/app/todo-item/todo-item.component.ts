import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Todo from "../Todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html"
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @Output() delete: EventEmitter<number> = new EventEmitter();

  deleteTodo(id: number) {
    this.delete.emit(id);
  }

  constructor() {}

  ngOnInit() {}
}
