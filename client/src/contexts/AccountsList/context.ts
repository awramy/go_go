import { createContext, useContext } from "react"
import {IAccountData} from "./interfaces";

//создаем контекст, который будет хранить экземпляр нашего класса
//{} - начальное значение, будет переопределено в провайдере
export const AccountContext = createContext<IAccountData>({} as IAccountData);

//хук для доступа к контексту с проверкой, что он определен в провайдере
export const useAccount = () => {
  const context = useContext(AccountContext)
  if(!context){
    throw new Error('useAccount must be defined')
  }
  return context
}
