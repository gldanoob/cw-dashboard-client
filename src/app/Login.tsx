import { useLocation, useSearchParams } from 'react-router-dom';
import useAuth from './useAuth';

interface Props {
    callback?: boolean;
}

export default function Login(props: Props) {
    const { auth, callback } = useAuth();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    if (props.callback) {
        console.log(callback(searchParams))
        return <></>
    }

    return (
        <div>
            <div className="login-button" onClick={auth}>
                LOGIN TO GITLAB
            </div>
        </div>
    )



}