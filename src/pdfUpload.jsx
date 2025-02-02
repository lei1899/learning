import { useState } from "react";

const PdfUploader = ({ onFileSelect }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("请选择一个 PDF 文件");
    }
  };

  const handleConfirm = () => {
    if (!file) {
      alert("请先选择一个 PDF 文件");
      return;
    }
    onFileSelect(file);  // 传递文件给 App.js
    console.log("用户选择的文件:", file);
    alert(`你选择了文件: ${file.name}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input type="file" accept="application/pdf" onChange={handleFileChange} style={{ display: "none" }} id="fileInput" />
      <button onClick={() => document.getElementById("fileInput").click()}>选择 PDF</button>

      <input type="text" value={file ? file.name : ""} readOnly style={{ marginLeft: "10px", width: "250px" }} />

      <button onClick={handleConfirm} style={{ marginLeft: "10px" }}>确定</button>
    </div>
  );
};

export default PdfUploader;
