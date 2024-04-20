import "./App.sass";
import ExamplePage1 from "./Pages/ExamplePage1/ExamplePage1.js";
import ExamplePage2 from "./Pages/ExamplePage2/ExamplePage2.js";
import Heesang from "./Pages/Heesang/Heesang.js";
import Salinas from "./Pages/Salinas/Salinas.js";

function App() {
  return (
    <div className="App">
      <ExamplePage1 />
      <ExamplePage2 />
      <Heesang />
      <Salinas />
    </div>
  );
}

export default App;
