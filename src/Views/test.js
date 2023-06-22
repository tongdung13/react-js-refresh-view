import { Workbook } from 'exceljs';
import { useState } from 'react';

export const ExcelJs = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files?.[0]);
  };

  const handleFileValidation = () => {
    validateExcelFile(file);
  };

  const validateExcelFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        const buffer = reader.result;
        const workbook = new Workbook();
        workbook.xlsx.load(buffer).then(() => {
           
            // Get the first worksheet
            const worksheet = workbook.getWorksheet(1);
             console.log("11----11", worksheet);
            // Add a text box with the watermark text
           worksheet.addImage(0, 'B1:E6');
        
            // // Set the text box position and size
            // watermark.position = { type: "absolute", x: 0, y: 0 };
            // watermark.width = worksheet.pageSetup.paperSize.width;
            // watermark.height = worksheet.pageSetup.paperSize.height;
        
            // Save the workbook with the added watermark
            workbook.xlsx.writeFile("../assets/demo.xlsx");
          });
      };
    });
  };

  return (
    <div>
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleFileValidation}>File validation</button>
    </div>
  );
};
