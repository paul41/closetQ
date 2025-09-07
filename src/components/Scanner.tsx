import { useState } from "react"; 
import QrBarcodeScanner from "react-qr-barcode-scanner";
import { Result, NotFoundException } from "@zxing/library";
import useScanResult from "../hooks/useScanResult";
import './Scanner.css';

const ScannerSection = () => {
  const [data, setData] = useState<string>("No result");
  const [scanning, setScanning] = useState<boolean>(true);

  const handleScan = (result?: Result) => {
    if (result) {
      setData(result.getText());
      setScanning(false); // ✅ stop scanning after first result
    }
  };

  const handleError = (error: unknown) => {
    if (error instanceof NotFoundException) return; // ignore expected errors
    console.error("Scanner error:", error);
  };

  const restartScan = () => {
    setData("No result");
    setScanning(true); // ✅ resume scanning
  };
  useScanResult(data, scanning);
  return (
    <>
      {scanning ? (
        <QrBarcodeScanner
          onUpdate={(err: unknown, result?: Result) => {
            if (result) handleScan(result);
            if (err) handleError(err);
          }}
          width = "300px"
          height = "300px"
        />
      ) : (
        <p>✅ Scan complete!</p>
      )}

      <p>Scanned Data: {data}</p>

      {!scanning && (
        <button onClick={restartScan} style={{ marginTop: "10px" }}>
          Scan Again
        </button>
      )}
      <button onClick={() => setScanning(!scanning)} style={{ marginLeft: "10px",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#007BFF", color: "#fff", cursor: "pointer" }}>
        Start/Stop Scanner
      </button>
    </>
  );
};

export default ScannerSection;
