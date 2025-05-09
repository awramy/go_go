import {IAccount} from "../../interfaces/components";
import $host from "../index";

export const getAllAccounts = async (): Promise<IAccount[]> => {
  const { data } = await $host.get<IAccount[]>('/account')
  return data
}