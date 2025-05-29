import {IAccount} from "../../types/components";

export interface IActiveAccountData {
  account: IAccount
  updateAccount: (newAccount: IAccount) => void
}