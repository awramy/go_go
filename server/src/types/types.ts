import {Api} from "telegram";
import {Role} from "@fireworksai/sdk";

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
  userListId: number,
  fakeUserRoleId: number,
  timeStop: string,
  messagesPerHour: number,
  answersPerHour: number,
  reactionsPerHour: number,
  commentsPerHour: number,
  startDelay: number,
}

export interface ChatHistory {
  role: Role,
  content: string
}