import { Fragment } from "react";

function ListGroup() {
  /**
   * The following code creates a List Group
   * using the Bootstrap list group libarary
   */
  const items = ["New York", "Seattle", "LA", "Tokyo"];

  const message = items.length === 0 ? <p>No items found</p> : null;
  return (
    //everything below is wraped with a fragment
    <>
      <h1>List</h1>
      {/* conditional redering */}
      {message}
      <ul className="list-group">
        {/* Rendering a list dynamically */}
        {items.map((item) => (
          // react needs to know how to distinquish each item
          // incase it needs to be removed.
          <li className="list-group-item" key={item} onClick={() => console.log("clicked")}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
