import { IProxy } from "../../types/components";

export interface IProxyList {
    proxyList: IProxy[]
    updateProxyList: (newData: IProxy[]) => void
    fetchProxyList: () => void
}