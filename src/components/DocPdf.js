import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import React from "react";
import PDF from "react-pdf-watermark";
import "../assets/css/watermark.css";

export default function DocPdf() {
  const exportPDF = () => {
    let element = (
      <div style={{ width: "1000px" }}>
        <h1 style={{ marginLeft: "47px" }}>Table Pdf</h1>
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

export class MyPdfViewer extends React.Component {
  state = {};

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  };

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  };

  renderPagination = (page, pages) => {
    let previousButton = (
      <li className="previous" onClick={this.handlePrevious}>
        <a href="#">
          <i className="fa fa-arrow-left"></i> Previous
        </a>
      </li>
    );
    if (page === 1) {
      previousButton = (
        <li className="previous disabled">
          <a href="#">
            <i className="fa fa-arrow-left"></i> Previous
          </a>
        </li>
      );
    }
    let nextButton = (
      <li className="next" onClick={this.handleNext}>
        <a href="#">
          Next <i className="fa fa-arrow-right"></i>
        </a>
      </li>
    );
    if (page === pages) {
      nextButton = (
        <li className="next disabled">
          <a href="#">
            Next <i className="fa fa-arrow-right"></i>
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
    );
  };
  // applyWatermark = (canvas, context) => {
  //   context.globalAlpha = 0.15;
  //   context.font = "55px bold Arial";
  //   context.translate(canvas.width / 2, canvas.height / 2);
  //   context.rotate(-Math.atan(canvas.height / canvas.width)); // Rotate watermark to show diagonally

  //   const text = "Strictly Confidential. Not to be circulated";
  //   metrics = context.measureText(text);
  //   context.fillText(text, -metrics.width / 2, 55 / 2);
  // };

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div className="watermark">
        <PDF
          file="test.pdf"
          page={this.state.page}
          watermark="eqweq3"
          watermarkOptions={{
            transparency: 1,
            fontSize: 255,
            fontStyle: "Bold",
            fontFamily: "Arial",
          }}
          onDocumentComplete={() => {
            /* Do anything on document loaded like remove loading, etc */
          }}
          onPageRenderComplete={(pages, page) => this.setState({ page, pages })}
        />
        {pagination}
      </div>
    );
  }
}
