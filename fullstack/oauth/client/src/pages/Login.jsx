import { GoogleLogin } from '@react-oauth/google'
import { useOAuthMutation } from '../redux/authApi'

const Login = () => {
    const [signin, { isSuccess, isError, isLoading }] = useOAuthMutation()
    return <>
        <GoogleLogin
            onError={e => console.log(e)}
            onSuccess={({ credential }) => signin({ credential })}
        />
    </>
}

export default Login