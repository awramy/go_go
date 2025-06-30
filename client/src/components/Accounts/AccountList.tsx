import {useAccount} from "../../contexts/AccountsList/context";
import AccountItem from "./AccountItem";

const AccountList = () => {

  const {accounts} = useAccount()

  return (
    <>
      {
        accounts.map((account, index) => (
          <AccountItem
            key={index}
            id={account.id}
            phone={account.phone}
            session={account.session}
            proxy={account.proxy}
          />
        ))
      }
    </>
  );
};

export default AccountList;