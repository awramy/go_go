import {useProxyList} from "../../contexts/ProxyList/context";
import {Button, Form, Modal} from "react-bootstrap";
import {FC, useState} from "react";
import {IAddProxyModal} from "../../types/components";
import {linkProxyToAccount} from "../../api/modules/account.api";
import {useAccount} from "../../contexts/AccountsList/context";

const AddProxyModal: FC<IAddProxyModal> = ({accountId, isShow, onHide}) => {

  const [ activeProxy, setActiveProxy ] = useState<number>()
  const {proxyList, fetchProxyList} = useProxyList()
  const { updateOneAccount } = useAccount()
  const freeProxy = proxyList.filter(proxy => {
    return !proxy?.Tg_account?.id
  })

  const saveProxyInAccount = async () => {
    if (activeProxy) {
      await linkProxyToAccount(accountId, activeProxy)
        .then(data => {
          updateOneAccount(data)
          fetchProxyList()
          onHide()
        })
    } else {
      console.log('выберите прокси')
    }
  }


  return (
    <Modal show={isShow} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Выберите прокси для аккаунта:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Select
            onChange={e => {
              console.log('ss')
              setActiveProxy(Number(e.target.value))
            }}>
            <option>Выберите прокси</option>
            {
              freeProxy.map(proxy => (
                <option
                  key={proxy.id}
                  value={proxy.id}
                >{proxy.host}</option>
              ))
            }
          </Form.Select>
          <Button onClick={saveProxyInAccount}>Установить прокси</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default AddProxyModal
