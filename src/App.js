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
          <h2>Birthday Celebration</h2>
          <p> Saturday, May 14th, 2022</p>
        </header>
        <Invitation />
        <Eventbrite />
        <Footer />
      </div>
    </div>
  );
}

export default App;
