import {Api} from "telegram";

export interface searchChats {
  chat: Api.TypeChat,
  usersCount: number | undefined,
  keyword: string
}

export interface simplifyUsers {
  count: number,
  users: ({
    id: bigInt.BigInteger,
    username: string,
    firstname: string,
    phone: string,
  } | undefined)[]
}

export interface chatUser {
  id: number
  username: string | null
  phone: string | null
  userListId: number
}

//warming

export interface BodyWarmingData {
  timeStop: string,
  messagesPerHour: number,
  answersPerHour: number,
  reactionsPerHour: number,
  commentsPerHour: number
}