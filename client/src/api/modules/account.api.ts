import axios from "axios";
import {IAccount} from "../../interfaces/components";

export const getAllAccounts = async (): Promise<IAccount[]> => {
  const { data } = await axios.get<IAccount[]>('/account')
  if(data instanceof ) return data
}