/* Type script*/
/* var model = {
    user: "Adams",
    items: [{action: "Buy Flowers", done: false},
            {action: "get shoes", done: false},
            {action: "Buy tickets", done: true},
            {action: "call Roy", doen: false}

]

};
 */

/* import { Action } from 'rxjs/internal/scheduler/Action';
import { doesNotReject } from 'assert'; */

/*shows the data model rewritten to use JavaScript features that were added in the ECMAScript 6 standard*/
export class Model {
    user;
    items;

      constructor() {
          this.user = "B4EVA",
          this.items = [new TodoItems("Buy Flowers", false),
                        new TodoItems("Get shoes", false),
                        new TodoItems("Buy tickets", false),
                        new TodoItems("Call Roy", false),
                        new TodoItems("Run away from house", false),
                        new TodoItems("DryClean Rooms",false)]
      }
}
 export class TodoItems{
     action;
     done;

     constructor(action, done){
         this.action = action;
         this.done = done
        }
      
 }