import "./App.css";
import ScannerSection from "./components/Scanner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>QR/Barcode Scanner</h1>
      </header>
      <main style={{ padding: "20px",border: "1px solid #ccc", borderRadius: "8px" }}>
        <ScannerSection />
      </main>
    </div>
  );
}

export default App;
