import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Accounts from "./pages/Accounts.tsx";
import AccountSetting from "./pages/AccountSetting";
import {useEffect} from "react";
import {useProxyList} from "./contexts/ProxyList/context";
import Parsing from "./pages/Parsing";

function App() {

  const { fetchProxyList } = useProxyList()

  useEffect(() => {
    fetchProxyList()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/accounts'} replace/>} />
        <Route path="/accounts" element={<Accounts/>} />
        <Route path="/accounts/:id" element={<AccountSetting/>} />
        <Route path="/parsing" element={<Parsing/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
