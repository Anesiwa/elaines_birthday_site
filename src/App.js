import "./App.css";
import Eventbrite from "./Eventbrite";
import Invitation from "./Invitation";
import Photos from "./Photos";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Elaine's Sassy Sixty</h1>
        </header>
        <Invitation />
        <Eventbrite />
        <Photos />
        <Footer />
      </div>
    </div>
  );
}

export default App;
