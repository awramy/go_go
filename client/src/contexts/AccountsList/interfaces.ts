import {IAccount} from "../../types/components";

export interface IAccountData {
  accounts: IAccount[]
  updateAccounts: (newData: IAccount[]) => void
  updateOneAccount: (newAccount: IAccount) => void
}