import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyPdfViewer from "./components/DocPdf";
// import RefreshApp from "./Views/refesh-view";
// import Example from "./components/print";
// import { RefreshValue } from "./Views/refesh-view";
import { Header } from "./Views/Header";
import { Customers } from "./Views/Customers";
import { ExportCSV } from "./Views/ExportCSV";
import { ExportReactCSV } from "./Views/ExportReactCSV";

function App() {
  const customers = () => {
    let custs = [];
    for (let i = 0; i <= 25; i++) {
      custs.push({
        firstName: `first${i}`,
        lastName: `last${i}`,
        email: `abc${i}@gmail.com`,
        address: `000${i} street city, ST`,
        zipcode: `0000${i}`,
      });
    }
    return custs;
  };

  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <h2>Customers</h2>
        </div>
        <div className="col-md-4 center">
          {/* <ExportCSV
            csvData={customers()}
            fileName='test'
          /> */}
           <ExportReactCSV csvData={customers()} fileName='demo' style={{  }} />
        </div>
      </div>
      <Customers customers={customers()} />
    </div>
  );
}

export default App;
