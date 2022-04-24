import {useEffect} from 'react';
import { useNavigate } from 'react-router';

const RedirectPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/early-access")
    })

  return (
    <div></div>
  )
}

export default RedirectPage