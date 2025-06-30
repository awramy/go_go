import {FC, useState} from 'react'
import {IChooseAccount} from "../../types/components";
import {Button, ListGroup} from "react-bootstrap";
import {useActiveAccount} from "../../contexts/ActiveAccount/context";
import {getAccountChats} from "../../api/modules/parsing.api";
import Loader from "../global/Loader";


const ChooseAccount: FC<IChooseAccount> = ({accountList, setChats}) => {

  const {account, updateAccount} = useActiveAccount()
  const [isLoading, setLoading] = useState<boolean>(false)

  const getChats = async () => {
    setLoading(true)
    await getAccountChats(account.id).then(data => {
      setLoading(false)
      setChats(data)
    })
  }

  return (
        <div className='width-40 mt-4'>
          <h3>Выберите аккаунт</h3>
          <ListGroup>
            {
              accountList.map(currAccount =>
                <ListGroup.Item
                  key={currAccount.id}
                  variant='light'
                  disabled={currAccount.session === null}
                  active={account.id === currAccount.id}
                  onClick={() => updateAccount(currAccount)}
                >{currAccount.phone}</ListGroup.Item>
              )
            }
          </ListGroup>

          <Button
            className='mt-2 border-0 bg-violet'
            onClick={getChats}
          >Получить чаты</Button>
          {isLoading && <Loader className='mt-2 ms-2'/>}
        </div>
    )
}

export default ChooseAccount
