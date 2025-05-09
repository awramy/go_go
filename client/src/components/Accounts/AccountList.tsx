import {useAccount} from "../../contexts/AccountContext/context";
import AccountItem from "./AccountItem";

const AccountList = () => {

  const {accounts} = useAccount()

  return (
    <>
      {
        accounts.map((account) => (
          <AccountItem id={account.id} phone={account.phone} proxy={account.proxy} />
        ))
      }
    </>
  );
};

export default AccountList;