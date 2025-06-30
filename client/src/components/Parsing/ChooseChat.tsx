import {FC, useState} from 'react'
import {IAccountChat, IChooseChat} from "../../types/components";
import {Button, FormControl, ListGroup} from "react-bootstrap";
import {getChatUsers} from "../../api/modules/parsing.api";
import {useActiveAccount} from "../../contexts/ActiveAccount/context";
import Loader from "../global/Loader";


const ChooseAccount: FC<IChooseChat> = ({isFoundChats, chatList, setGetUsers, setTableData}) => {

  const [activeChat, setActiveChat] = useState<IAccountChat>()
  const [title, setTitle] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const {account} = useActiveAccount()

  const parsing = async () => {
    if(!activeChat) return
    setLoading(true)
    await getChatUsers(account.id, activeChat.username, title).then(data => {
      if(data.usersCount) {
        setLoading(false)
        setTableData({tableId: data.tableId, usersCount: data.usersCount})
        setGetUsers(true)
      }
    }).catch(e => console.log(e))
  }

  console.log()

  return (

    // <div className='width-40 mt-4'>
    //   <ListGroup>
    //     {
    //       chatList.map(currChat =>
    //         <ListGroup.Item
    //           key={currChat.id}
    //           active={activeChat?.id === currChat.id}
    //           onClick={() => setActiveChat(currChat)}
    //         >{currChat.title} // {currChat.participantsCount}</ListGroup.Item>
    //       )
    //     }
    //   </ListGroup>
    //
    //   <FormControl
    //     type='text'
    //     placeholder='Введите заголовок для таблицы'
    //     value={title}
    //     onChange={e => {setTitle(e.target.value)}}
    //   />
    //   <Button
    //     onClick={parsing}
    //   >Парсинг пользователей</Button>
    // </div>


    <div className={`width-40 mt-4 ${isFoundChats || 'bg-lightgray'} rounded-2`}>
      {isFoundChats ? (
        <div>
          <h3>Выберите чат</h3>
          <ListGroup>
            {
              chatList.map(currChat =>
                <ListGroup.Item
                  key={currChat.id}
                  variant='light'
                  active={activeChat?.id === currChat.id}
                  onClick={() => setActiveChat(currChat)}
                >{currChat.title} // {currChat.participantsCount}</ListGroup.Item>
              )
            }
          </ListGroup>

          <FormControl
            type='text'
            placeholder='Введите заголовок для таблицы'
            className='mt-2 border-violet'
            value={title}
            onChange={e => {setTitle(e.target.value)}}
          />
          <Button
            className='mt-2 bg-violet border-0'
            onClick={parsing}
          >Парсинг пользователей</Button>
          {isLoading && <Loader className='mt-2 ms-2'/>}
        </div>
      ) : (
        <div className='text-gray w-100 h-100 d-flex justify-content-center align-items-center'>
          <h4>Выберите аккаунт</h4>
        </div>
      )}
    </div>
  )
}

export default ChooseAccount
