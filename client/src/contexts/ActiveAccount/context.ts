import {createContext, useContext} from "react";
import {IActiveAccountData} from "./interfaces";


export const ActiveAccountContext = createContext<IActiveAccountData>({} as IActiveAccountData)

export const useActiveAccount = () => {
  const context = useContext(ActiveAccountContext)

  if (!context) {
    throw new Error('useActiveAccount must be used within the context')
  }

  return context
}