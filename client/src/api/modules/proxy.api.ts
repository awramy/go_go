import $host from "../index"
import {IProxy} from "../../types/components"

export const getAllProxy = async (): Promise<IProxy[]> => {
    const { data } = await $host.get<IProxy[]>('/proxy')
    return data
}