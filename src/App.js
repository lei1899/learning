import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import PdfUploader from "./pdfUpload";

const App = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileSelect = (file) => {
    const fileURL = URL.createObjectURL(file);
    setPdfFile(fileURL);
  };
  console.log("====pdfFile=", pdfFile);
  return (
    <div style={{ padding: "20px" }}>
      <h1>PDF 预览工具</h1>
      <PdfUploader onFileSelect={handleFileSelect} />
      
      {pdfFile && (
        <div style={{ marginTop: "20px", height: "600px", border: "1px solid #ccc" }}>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
            <Viewer fileUrl={pdfFile} />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default App;
