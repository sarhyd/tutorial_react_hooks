import React, { useState } from "react";

import ResourceList from "./ResourceList";

const App = () => {
  const [resourceName, setResourceName] = useState("users");

  return (
    <React.Fragment>
      <button onClick={() => setResourceName("users")}>Users</button>
      <button onClick={() => setResourceName("posts")}>Posts</button>
      <button onClick={() => setResourceName("todos")}>Todos</button>
      <ResourceList resourceName={resourceName} />
    </React.Fragment>
  );
};
export default App;
