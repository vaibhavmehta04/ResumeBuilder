import React, { useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PdfDownloader = ({ validate }) => {
  useEffect(() => {
    const handler = async () => {
      if (!validate()) return;

      const input = document.getElementById("resume-preview");

      const canvas = await html2canvas(input, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    };

    window.addEventListener("download-pdf", handler);
    return () => window.removeEventListener("download-pdf", handler);
  }, [validate]);

  return null; // button is now in App.jsx
};

export default PdfDownloader;
