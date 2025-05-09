import {FC, ReactNode} from "react";
import {AccountStore} from "./store";
import {AccountContext} from "./context";




export const AccountProvider: FC<{children: ReactNode}> = ({children}) => {
  const account = new AccountStore()

  return (
    <AccountContext.Provider value={account}>
      {children}
    </AccountContext.Provider>
  )
}