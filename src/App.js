import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyPdfViewer from "./components/DocPdf";
// import RefreshApp from "./Views/refesh-view";
// import Example from "./components/print";
import { RefreshValue } from "./Views/refesh-view";

function App() {
  return (
    // (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<RefreshHome />}>
    //       <Route index element={<RefreshHome />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    // ),
    // (
    //   <div className="container mt-5">
    //     <h2 className="mb-4">
    //       React Credit Card Payment UI Componenet Example
    //     </h2>
    //     <CreditCardUi />
    //   </div>
    // ),
    // (
    //   <div className="container mt-5">
    //     <h2 className="mb-4">
    //       React Js Add Class to Div On Window Scroll Example
    //     </h2>
    //     <Home />
    //   </div>
    // )
    <div className="App">
      <RefreshValue />
    </div>
  );
}

export default App;
