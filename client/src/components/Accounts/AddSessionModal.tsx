import {FC, useState} from 'react'
import {Button, Form, Modal} from "react-bootstrap";
import {updateSession} from "../../api/modules/account.api";
import VerifySessionModal from "./VerifySessionModal";

const AddSessionModal: FC<{id: number, isShow: boolean, onHide: () => void}> = ({id, isShow, onHide}) => {

  const [apiId, setApiId] = useState<string>('')
  const [apiHash, setApiHash] = useState<string>('')
  const [isShowModal, setShowModal] = useState<boolean>(false)

  const getConfirmCode = async () => {
    await updateSession(id, apiId, apiHash).then( data => {
        if(data.status === 'success') {
          console.log('success is true')
          setShowModal(true)
          onHide()
        }
      }
    )
  }

  return (
    <>
      <Modal show={isShow} onHide={onHide}>
        <Modal.Header>
          Вход
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Api-ID</Form.Label>
              <Form.Control
                type='number'
                value={apiId}
                onChange={e => setApiId(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Api-HASH</Form.Label>
              <Form.Control
                type='text'
                value={apiHash}
                onChange={e => setApiHash(e.target.value)}
              />
            </Form.Group>
            <Button onClick={getConfirmCode}>
              Войти в аккаунт
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <VerifySessionModal id={id} isShow={isShowModal} onHide={() => setShowModal(false)} />
    </>
  )
}

export default AddSessionModal
