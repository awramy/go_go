export interface IAccount {
  id: number,
  phone: string,
  username: string,
  firstname: string,
  lastname: string | null,
  session: Session | null,
  proxy: IProxy | null
}

export interface Session {
  id: number,
  sessionString: string,
  apiId: number,
  apiHash: string
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

export interface IAccountChat {
  id: number;
  title: string;
  username: string;
  participantsCount: number;
}

export interface IChooseAccount {
  accountList: IAccount[];
  setChats: (chats: IAccountChat[]) => void;
}

export interface IChooseChat {
  chatList: IAccountChat[];
  isFoundChats: boolean;
  setGetUsers: (isGetUsers: boolean) => void;
  setTableData: (count: IChatUsersTableData) => void;
}

export interface IChatUsersTableData {
  tableId: number,
  usersCount: number
}