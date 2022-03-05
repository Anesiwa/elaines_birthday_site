import "./App.css";
import Eventbrite from "./Eventbrite";
import Invitation from "./Invitation";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Elaine's Sassy Sixty</h1>
        </header>
        <Invitation />
        <br />
        <Eventbrite />
        <Footer />
      </div>
    </div>
  );
}

export default App;
