import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="textUtilis" nav2ndcomponent= "About us" />
      <div className="container">
      <TextForm heading="Enter the text to analyze" placeHolder= "Enter text here"/>
      </div>
    </>
  );
}

export default App;

