import { useLocation, useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'

    return (
        <>
            <h1>Login</h1>
            { fromPage}
        </>
    )
}