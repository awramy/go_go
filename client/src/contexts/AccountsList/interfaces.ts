import {IAccount} from "../../interfaces/components";

export interface IAccountData {
  accounts: IAccount[],
  updateAccounts: (newData: IAccount[]) => void
}