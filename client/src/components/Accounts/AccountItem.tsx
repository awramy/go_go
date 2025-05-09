import {Button, Card} from "react-bootstrap";
import {FC} from "react";
import {IAccountInfo} from "../../interfaces/components";
import {useNavigate} from "react-router-dom";


const AccountItem:FC<IAccountInfo> = ({id, phone, proxy}) => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/accounts/${id}`)
  }

  return (
    <Card className='m-2'>
      <div className='d-flex align-items-center p-3 justify-content-between'>
        <div className='d-inline-block'>
          <div className='d-inline-block me-2'>{phone}</div>
          <div className={`d-inline-block rounded ${proxy?.host ? 'bg-violet text-light': 'bg-lilac text-obsidian'} px-2 py-1`} >
            {proxy?.host ? 'прокси: ': 'прокси не привязан'}
            {proxy?.host ? <span className='px-1 bg-lavender rounded-1 text-indigo'>{proxy?.host}</span>: ''}
          </div>
        </div>


        <Button
          className='float-end bg-lavender border-1 border-violet text-violet'
          onClick={handleClick}
        >Настройка</Button>
      </div>

    </Card>
  );
};

export default AccountItem;