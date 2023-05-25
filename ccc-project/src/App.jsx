import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import Router from "./Components/Router";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
