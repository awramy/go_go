import {Button, Card} from "react-bootstrap";
import {FC, useState} from "react";
import {IAccount} from "../../types/components";
import {useNavigate} from "react-router-dom";
import {useActiveAccount} from "../../contexts/ActiveAccount/context";
import {useAccount} from "../../contexts/AccountsList/context";
import AddProxyModal from "./AddProxyModal";
import {disconnectProxy} from "../../api/modules/account.api";
import {useProxyList} from "../../contexts/ProxyList/context";
import AddSessionModal from "./AddSessionModal";


const AccountItem: FC<Pick<IAccount, 'id' | 'phone' | 'proxy' | 'session'>> = ({id, phone, proxy, session}) => {

  const {updateAccount} = useActiveAccount()
  const {accounts, updateOneAccount} = useAccount()
  const {fetchProxyList} = useProxyList()
  const navigate = useNavigate()
  const [proxyModalVisible, setProxyModalVisible] = useState<boolean>(false)
  const [sessionModalVisible, setSessionModalVisible] = useState<boolean>(false)

  const goToSettingPage = () => {
    const newActiveAccount = accounts.find(account => account.id === id)
    if (newActiveAccount) {
      updateAccount(newActiveAccount)
      navigate(`/accounts/${id}`)
    } else {
      console.log('Active Account is empty (AccountItem.tsx)')
    }
  }
  const disconnectProxyToAccount = async () => {
    await disconnectProxy(id)
      .then(data => {
        updateOneAccount(data)
        fetchProxyList()
      })
  }


  return (
    <>
      <Card className='m-2'>
        <div className=' d-flex align-items-center p-3 justify-content-between'>
          <div className='d-inline-block'>
            <div className='d-inline-block me-2 min-w-120'>{phone}</div>
            {
              proxy?.host ? <button className='bg-transparent border-0' onClick={disconnectProxyToAccount}>❌</button>
                : <button className='bg-transparent border-0' onClick={() => setProxyModalVisible(true)}>🔗</button>
            }
            <div
              className={`d-inline-block rounded fw-light ${proxy?.host ? 'bg-violet text-light' : 'border border-obsidian text-obsidian'} px-2 py-1`}>
              {proxy?.host ? 'прокси: ' : 'без прокси'}
              {proxy?.host ? <span className='px-1 bg-lavender rounded-1 text-indigo'>{proxy?.host}</span> : ''}
            </div>
          </div>


          <div className='float-end'>
            {
              session ? <div className='pt-1 me-2 d-inline-block text-secondary'>вход выполнен</div>
                : <button onClick={() => setSessionModalVisible(true)} className='pt-1 me-1 bg-transparent border-0 text-warning'>войдите в аккаунт</button>
            }
            <Button
              className='float-end bg-lavender border-1 border-violet text-violet'
              onClick={goToSettingPage}
            >Настройка</Button>
          </div>

        </div>
      </Card>
      <AddProxyModal accountId={id} isShow={proxyModalVisible} onHide={() => setProxyModalVisible(false)}/>
      <AddSessionModal id={id} isShow={sessionModalVisible} onHide={() => setSessionModalVisible(false)}/>
    </>
  );
};

export default AccountItem;