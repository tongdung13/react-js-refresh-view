import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";

export default function DocPdf() {
  const exportPDF = () => {
    let element = (
      <div style={{ width: '1000px' }}>
        <h1 style={{ marginLeft: '47px' }}>Table Pdf</h1>
      </div>
    );
    const doc = new jsPDF("p", "pt", "letter");
    doc.html(ReactDOMServer.renderToString(element), {
      callback: function (doc) {
        doc.setTextColor(255, 0, 0);
        doc.save("sample.pdf");
      },
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={exportPDF}>export</button>
    </div>
  );
}
