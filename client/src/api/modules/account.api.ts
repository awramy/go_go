import {IAccount} from "../../types/components";
import $host from "../index";

export const getAllAccounts = async (): Promise<IAccount[]> => {
  const { data } = await $host.get<IAccount[]>('/account')
  return data
}

export const getActiveAccount = async (id: number): Promise<IAccount> => {
  const { data } = await $host.get<IAccount>(`/account/${id}`)
  return data
}

export const updateAccount = async (accountData: IAccount): Promise<IAccount> => {
  const { data } = await $host.put<IAccount>(`/account/${accountData.id}`, accountData)
  return data
}

export const linkProxyToAccount = async (accountId: number, proxyId: number): Promise<IAccount> => {
  const { data } = await $host.put<IAccount>(`/account/${accountId}/proxy`, { proxyId }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return data
}

export const disconnectProxy = async (accountId: number) => {
  const { data } = await $host.delete<IAccount>(`/account/${accountId}/proxy`)
  return data
}

export const updateSession = async (accountId: number, apiId: string, apiHash: string) => {
  const { data } = await $host.post<{status: string}>(`/account/${accountId}/session`, {apiId, apiHash})
  console.log(data)
  return data
}

export const verifySession = async (accountId: number, code: string) => {
  const { data } = await $host.post<IAccount>(`/account/${accountId}/session/verify`, {code})
  return data
}