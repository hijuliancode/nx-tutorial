import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@nx-tutorial/data'

@Component({
  selector: 'nx-tutorial-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
