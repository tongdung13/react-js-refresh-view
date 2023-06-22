// import React from "react";
// import * as XLSX from "xlsx";
import ExcelJS from "exceljs";

export function Excel() {
  const workbook = new ExcelJS.Workbook();
  console.log("----1221----");
  workbook.xlsx.readFile("./MyWorkBook.xlsx").then(() => {
    console.log("11----11");
    // Get the first worksheet
    const worksheet = workbook.getWorksheet(1);

    // Add a text box with the watermark text
    const watermark = worksheet.addText("Watermark Text", {
      font: { size: 20, color: { argb: "FFFFFF" } },
      alignment: { horizontal: "center", vertical: "middle" },
    });

    // Set the text box position and size
    watermark.position = { type: "absolute", x: 0, y: 0 };
    watermark.width = worksheet.pageSetup.paperSize.width;
    watermark.height = worksheet.pageSetup.paperSize.height;

    // Save the workbook with the added watermark
    workbook.xlsx.writeFile("../assets/demo.xlsx");
  });
}
