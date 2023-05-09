import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RefreshHome } from "./Views/refesh-view";
import CreditCardUi from "./components/CreditCardUi";

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
    <div className="container mt-5">
      <h2 className="mb-4">React Credit Card Payment UI Componenet Example</h2>
      <CreditCardUi />
    </div>
  );
}

export default App;