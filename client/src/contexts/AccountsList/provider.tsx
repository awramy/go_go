import {FC, ReactNode, useState} from "react";
import {AccountContext} from "./context";
import {IAccount} from "../../types/components";




export const AccountProvider: FC<{children: ReactNode}> = ({children}) => {
  const [accounts, setAccounts] = useState<IAccount[]>([] as IAccount[])

  const updateAccounts = (newData: IAccount[]) => {
    setAccounts(newData)
  }

  const updateOneAccount = (newAccount: IAccount) => {
    setAccounts(prevAccounts =>
      prevAccounts.map(account =>
        account.id === newAccount.id ? newAccount : account
      )
    )
  }

  return (
    <AccountContext.Provider value={{accounts, updateAccounts, updateOneAccount}}>
      {children}
    </AccountContext.Provider>
  )
}