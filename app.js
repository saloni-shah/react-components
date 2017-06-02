// TODO
var Cucumbers = () => (
  <div>
    Cucumbers
  </div>
);
var Kale = () => (
  <div>
    Kale
  </div>
);
var GroceryListItem = (props) => (
    <li>{props.listitem}</li>
);
var GroceryList = (props) => {

  var mapElem =props.todos.map((item) => {
    console.log(item);
    return (
      <GroceryListItem listitem={item}/>
    );
  })
  return ( <ul>{mapElem}</ul> );
};
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList todos={['Cucumber', 'Tomatoes', 'Kale']}/> 
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

var TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

var App2 = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> 
  </div>
);
ReactDOM.render(<App2 />, document.getElementById("app2"));