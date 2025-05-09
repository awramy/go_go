import {IAccount} from "../../interfaces/components";
import {makeAutoObservable} from "mobx";

export class AccountStore {
  private _accounts: IAccount[]
  private _activeAccount: IAccount | null

  constructor() {
    this._accounts = []
    this._activeAccount = null
    makeAutoObservable(this)
  }

  get accounts() {
    return this._accounts
  }
  get activeAccount() {
    return this._activeAccount
  }

  setAccounts(accounts: IAccount[]) {
    this._accounts = accounts
  }
  setActiveAccount(activeAccount: IAccount) {
    this._activeAccount = activeAccount
  }
}