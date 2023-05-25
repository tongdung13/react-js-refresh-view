import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DocPdf from "./components/DocPdf";

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
      <DocPdf />
    </div>
  );
}

export default App;
