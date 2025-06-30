import {Container} from "react-bootstrap";
import {useActiveAccount} from "../contexts/ActiveAccount/context";
import {FormEvent, useState} from "react";
import {updateAccount} from "../api/modules/account.api";
import {useNavigate} from "react-router-dom";
import {IAccount} from "../types/components";


const AccountSettings = () => {

  const navigate = useNavigate()
  const {account} = useActiveAccount()
  const [phone, setPhone] = useState<string>(account.phone)

  const saveChanges = (e: FormEvent<HTMLFormElement>)=> {//типизируем e для нашей формы
    e.preventDefault()//отменяет перезагрузку страницы при отправке формы


    updateAccount({ id: account.id, phone: phone } as IAccount)
      .then(data => {
        console.log(data)
        navigate('/accounts')
      })
      .catch(e => {
        if( e instanceof Error) {
          console.log( e.message )
        } else console.log(`Unknown error:\n ${e}`)
      })
  }

  return (
    <Container>
      <form onSubmit={saveChanges}>
        <div>
          <input
            type="number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>

        <div>
          <button type='submit'>Отправить</button>
        </div>
      </form>
    </Container>
  );
};

export default AccountSettings;