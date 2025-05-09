export interface IAccountInfo {
  id: number;
  phone: string;
  proxy: IProxy | null;
}

export interface IAccount {
  id: number;
  phone: string;
  username: string;
  firstname: string;
  lastname: string | null;
  proxy: IProxy | null;
}

export interface IProxy {
  id: number;
  type: string;
  host: string;
  port: number;
}