import {BrowserRouter, Route, Routes} from "react-router-dom";
import Accounts from "./pages/Accounts/Accounts.tsx";
import {useEffect} from "react";
import {useAccount} from "./contexts/AccountContext/context";
import {getAllAccounts} from "./api/modules/account.api";

function App() {

  const account = useAccount()
  useEffect(() => {
    getAllAccounts().then(data => {
      account.setAccounts(data)
      console.log(data)
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accounts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
