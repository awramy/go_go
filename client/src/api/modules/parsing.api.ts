import $host from "../index"
import {IAccountChat} from "../../types/components";

//get - получение чатов аккаунта для парсинга по accountId
export const getAccountChats = async (accountId: number) => {
  const { data } = await $host.get<IAccountChat[]>(`/action/getChats/${accountId}`)
  return data
}

//post - получение пользователей чата (парсинг) - возвращает id таблицы из DB и кол-во юзеров в ней
export const getChatUsers = async (accountId: number, chatUsername: string, tableTitle: string) => {
  const { data } = await $host.post<{tableId: number, usersCount: number}>(`/action/parsing/${accountId}`, {
    chatUsername, tableTitle
  })
  return data
}

//post - сохранение таблицы с юзерами, возвращает blob
export const saveXLSX = async (accountId: number, tableId: number) => {
  try {
    const {data} = await $host.post(`/action/saveDB/${accountId}`, {tableId}, {
      responseType: 'blob'
    })
    return data
  } catch (e) {
    console.error(e)
  }
}