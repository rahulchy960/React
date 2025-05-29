import NewComponent from "./newComponent";
import UseState from "./UseState";
function App() {
  return (
    <>
    <h1>Hello React</h1>
    <NewComponent/>
    <UseState/>
    <h2>Render different component in react App</h2>
    </>
  );
}

export default App;

// .jsx component name always start with capital letter

//  when we return multiple elements from a component, they must be enclosed
//  in a single parent. because JSX expects a single parent element.


// The <>...</> syntax in React code is called a Fragment.
// It is a special shorthand for <React.Fragment>...</React.Fragment>.

// Since Fragments don’t create actual DOM elements, they make rendering more efficient.