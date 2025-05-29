export interface IAccount {
  id: number,
  phone: string,
  username: string,
  firstname: string,
  lastname: string | null,
  proxy: IProxy | null
}

export interface IProxy {
  id: number;
  type: string;
  host: string;
  port: number;
  isIPv6: boolean;
  login?: string;
  password?: string;
  Tg_account?: Pick<IAccount, "id" | "phone">
}

export interface IAddProxyModal {
  accountId: number;
  isShow: boolean;
  onHide: () => void;
}