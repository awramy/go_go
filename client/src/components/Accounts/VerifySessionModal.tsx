import {FC, useState} from 'react'
import {Button, Form, Modal} from "react-bootstrap";
import {verifySession} from "../../api/modules/account.api";
import {useAccount} from "../../contexts/AccountsList/context";

const VerifySessionModal: FC<{id: number, isShow: boolean, onHide: () => void}> = ({id, isShow, onHide}) => {

  const [code, setCode] = useState<string>('')

  const { updateOneAccount } = useAccount()

  const verifyCode = async () => {
    await verifySession(id, code).then(data => {
      if (data.id) {
        updateOneAccount(data)
        onHide()
      }
    })
  }

    return (
        <Modal show={isShow} onHide={onHide}>
          <Modal.Header>Введите код подтверждения</Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Control
              type='number'
              value={code}
              onChange={e => setCode(e.target.value)}
              />
              <Button
              onClick={verifyCode}>Отправить</Button>
            </Form>
          </Modal.Body>
        </Modal>
    )
}

export default VerifySessionModal
