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
// var GroceryListItem = (props) => (
//     <li>{props.listitem}</li>
// );
class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      done: false
    };
  }
  
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : ''
    };
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.listitem}</li>
    );

  }

}
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