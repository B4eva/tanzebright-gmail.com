import { Component } from "@angular/core";
import { Model, TodoItems} from "./model";


@Component({
selector: "todo-app",
templateUrl: "app.component.html"
})
export class AppComponent {
model = new Model();
getName() {
return this.model.user;
}
getTodoItems(){
  // add filter to check and remove ticked items
  return this.model.items.filter(item => !item.done);
}
addItem(newItems) {
  if (newItems != "") {
  this.model.items.push(new TodoItems(newItems, false));
  }
  }
}