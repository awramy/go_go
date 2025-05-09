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
    <Card>
      <Card.Body>{`${phone}, прокси: ${proxy}`}</Card.Body>
      <Button
        variant='dark'
        onClick={handleClick}
      >Настройка</Button>
    </Card>
  );
};

export default AccountItem;