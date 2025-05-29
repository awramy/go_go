import {FC, ReactNode, useState} from 'react'
import {ProxyContext} from "./context";
import {IProxy} from "../../types/components";
import {getAllProxy} from "../../api/modules/proxy.api";

const ProxyListProvider: FC<{children: ReactNode}> = ({children}) => {

    const [ proxyList, setProxyList] = useState<IProxy[]>([])

    //клиент-обновление списка прокси
    const updateProxyList = (newData: IProxy[]) => {
        setProxyList(newData)
    }
    //сервер-обновление списка серверов
    const fetchProxyList = async () => {
        await getAllProxy()
          .then(data => updateProxyList(data))
    }

    return (
        <ProxyContext.Provider value={{proxyList, updateProxyList, fetchProxyList}}>
            {children}
        </ProxyContext.Provider>
    )
}

export default ProxyListProvider
