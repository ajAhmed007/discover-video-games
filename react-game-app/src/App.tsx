//importing the Message component from src
import Message from "./Message"
import ListGroup from "./components/ListGroup"
// a component cannot return more than one element.
function App(){
  return <div>
    {/* to use the Message component, 
    we can use call it with self closing tag, like below */}
    {/* The message component below is a child of this App component */}
    {/* <Message/> */}
    <ListGroup/>

  </div>
}

export default App