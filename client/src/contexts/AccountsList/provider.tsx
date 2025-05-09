import {FC, ReactNode, useState} from "react";
import {AccountContext} from "./context";
import {IAccount} from "../../interfaces/components";




export const AccountProvider: FC<{children: ReactNode}> = ({children}) => {
  const [accounts, setAccounts] = useState<IAccount[]>([] as IAccount[])

  const updateAccounts = (newData: IAccount[]) => {
    setAccounts(newData)
  }

  return (
    <AccountContext.Provider value={{accounts, updateAccounts}}>
      {children}
    </AccountContext.Provider>
  )
}