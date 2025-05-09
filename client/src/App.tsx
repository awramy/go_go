import {BrowserRouter, Route, Routes} from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accounts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
