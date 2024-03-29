

import React, { useState } from "react";
import { puppyList } from "./data";

const App = () => {
  const [puppies, setPuppies] = useState(puppyList);

  return (
    <div>
      {puppies.map((puppy) => {
        return <p key={puppy.id}>{puppy.name}</p>;
      })}
    </div>
  );
};

export default App;