import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <div className="App">
      <Navbar home="home" about="about" />
      <TextArea />
    </div>
  );
}

export default App;
