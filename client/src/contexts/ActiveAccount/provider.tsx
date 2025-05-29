import {FC, ReactNode, useState} from "react";
import {IAccount} from "../../types/components";
import {ActiveAccountContext} from "./context";

const ActiveAccountProvider: FC<{children: ReactNode}> = ({children}) => {

  const [account, setAccount] = useState<IAccount>({} as IAccount)

  const updateAccount = (newAccount: IAccount) => {
    setAccount(newAccount)
  }

  return (
    <ActiveAccountContext.Provider value={{account, updateAccount}}>
      {children}
    </ActiveAccountContext.Provider>
  );
};

export default ActiveAccountProvider;