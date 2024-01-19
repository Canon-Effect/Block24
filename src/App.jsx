

// A react Component is A javascript functiomn that returns JSX
import Counter from "./Counter";
import {myName, PI} from "./MyNameandPi";


// what is JSX? -> ember 'HTML/JSX' in Javascript

const App = ()=> {
  return <hl>Hello {myName} PI is: {PI} 1 + 1 = {1 + 1}</hl>;
};

export default App