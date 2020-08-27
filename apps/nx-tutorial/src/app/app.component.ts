import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Todo } from "@nx-tutorial/data";

@Component({
  selector: 'nx-tutorial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: 'Todos';
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch()
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    })
  }

}
