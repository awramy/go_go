import { createContext, useContext } from "react"
import {IProxyList} from "./interfaces";

export const ProxyContext = createContext<IProxyList>({} as IProxyList);

export const useProxyList = () => {
    const context = useContext(ProxyContext)
    if (!context) {
        throw new Error('useProxyList context must be defined')
    }
    return context
}
