import {FC, useEffect, useState} from 'react'
import Header from "../components/Header/Header";
import {useAccount} from "../contexts/AccountsList/context";
import {getAllAccounts} from "../api/modules/account.api";
import {IAccountChat, IChatUsersTableData} from "../types/components";
import ChooseAccount from "../components/Parsing/ChooseAccount";
import ChooseChat from "../components/Parsing/ChooseChat";
import ParsingModal from "../components/Parsing/ParsingModal";
import '../styles/parsingPage.css'

const Parsing: FC = () => {

  const [isFoundChats, setFoundChats] = useState<boolean>(false)
  const [accountChats, setAccountChats] = useState<IAccountChat[]>([])

  const setChats = (chats: IAccountChat[]) => {
    setAccountChats(chats)
    setFoundChats(true)
  }

  //состояние, указывающее на то, были ли получены данные при парсинге
  const [isGetUsers, setGetUsers] = useState<boolean>(false)
  const [tableData, setTableData] = useState<IChatUsersTableData>({tableId: 0, usersCount: 0})
  const {accounts, updateAccounts} = useAccount()

  useEffect(() => {
    getAllAccounts().then(data => {
      updateAccounts(data)
    })
  }, []);

  return (
    <>
      <Header/>
      <div className='flex-cont'>
        <ChooseAccount
          accountList={accounts}
          setChats={setChats}
        />
        <ChooseChat
          chatList={accountChats}
          isFoundChats={isFoundChats}
          setGetUsers={(isGetUsers) => setGetUsers(isGetUsers)}
          setTableData={(data) => setTableData(data)}
        />
        <ParsingModal
          tableData={tableData}
          isShow={isGetUsers}
          onHide={() => setGetUsers(false)}
        />
      </div>
    </>
  )
}

export default Parsing
