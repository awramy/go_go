import Header from "../../components/Header/Header.tsx";
import AccountList from "../../components/Accounts/AccountList";
import {useAccount} from "../../contexts/AccountsList/context";
import {useEffect} from "react";
import {getAllAccounts} from "../../api/modules/account.api";

const Accounts = () => {

  const account = useAccount()
  useEffect(() => {
    getAllAccounts().then(data => {
      account.updateAccounts(data)
      console.log(data)
    })
  }, [])

  return (
     <>
       <Header/>
       <AccountList/>
     </>
  );
};

export default Accounts;